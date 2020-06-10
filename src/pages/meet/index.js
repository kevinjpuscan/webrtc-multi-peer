import React from "react";
import io from "socket.io-client";
import { getUserMedia } from "../../services/userMedia";
import styled from "styled-components";
import CONFIG from "../../config";

export const MeetStyled = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: var(--gray-black);

  .content-videos {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: ${props =>
      props.members >= 6
        ? "1fr 1fr 1fr"
        : props.members >= 2
        ? "1fr 1fr"
        : "1fr"};
    grid-template-columns: ${props => (props.members >= 3 ? "1fr 1fr" : "1fr")};
  }

  .content-videos div {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .video {
    background: black;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
  }

  @media (min-width: 1200px) {
    .content-videos {
      grid-template-rows: ${props => (props.members >= 3 ? "1fr 1fr" : "1fr")};
      grid-template-columns: ${props =>
        props.members >= 6
          ? "1fr 1fr 1fr"
          : props.members >= 2
          ? "1fr 1fr"
          : "1fr"};
    }
  }
`;

let socket = null;
let connections = [];
var peerConnectionConfig = {
  iceServers: [
    { urls: "stun:stun.services.mozilla.com" },
    { urls: "stun:stun.l.google.com:19302" }
  ]
};

class Meet extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      localStream: null,
      remoteStrems: [],
      members: 0
    };
    this.addRemoteVideo = this.addRemoteVideo.bind(this);
  }
  componentDidMount = () => {
    let component = this;
    socket = io(CONFIG.API_URL);
    getUserMedia().then(stream => {
      this.setState({ localStream: stream });
      this.addRemoteVideo(stream, "me");

      socket.emit("join", { roomId: this.props.match.params.roomid });
    });

    socket.on("user-left", function(id) {
      var video = document.querySelector('[data-socket="' + id + '"]');
      if (video) {
        var parentDiv = video.parentElement;
        video.parentElement.parentElement.removeChild(parentDiv);
        component.setState({ members: component.state.members - 1 });
      }
    });

    socket.on("signal", this.gotMessageFromServer);

    socket.on("user-joined", function(id, count, clients) {
      clients.forEach(function(socketListId) {
        if (!connections[socketListId]) {
          connections[socketListId] = new RTCPeerConnection(
            peerConnectionConfig
          );

          //Wait for their ice candidate
          connections.onicecandidate = function(event) {
            if (event.candidate != null) {
              console.log("SENDING ICE");
              socket.emit(
                "signal",
                socketListId,
                JSON.stringify({ ice: event.candidate })
              );
            }
          };

          //Wait for their video stream
          connections[socketListId].onaddstream = function(event) {
            //gotRemoteStream(event, socketListId);
            component.addRemoteVideo(event.stream, socketListId);
          };

          //Add the local video stream
          connections[socketListId].addStream(component.state.localStream);
        }
      });

      //Create an offer to connect with your local description

      if (count >= 2 && id !== socket.id) {
        connections[id].createOffer().then(function(description) {
          connections[id]
            .setLocalDescription(description)
            .then(function() {
              // console.log(connections);
              socket.emit(
                "signal",
                id,
                JSON.stringify({ sdp: connections[id].localDescription })
              );
            })
            .catch(e => console.log(e));
        });
      }
    });
  };

  gotMessageFromServer(fromId, message) {
    //Parse the incoming signal
    var signal = JSON.parse(message);

    //Make sure it's not coming from yourself
    if (fromId !== socket.id) {
      if (signal.sdp) {
        connections[fromId]
          .setRemoteDescription(new RTCSessionDescription(signal.sdp))
          .then(function() {
            if (signal.sdp.type === "offer") {
              connections[fromId]
                .createAnswer()
                .then(function(description) {
                  connections[fromId]
                    .setLocalDescription(description)
                    .then(function() {
                      socket.emit(
                        "signal",
                        fromId,
                        JSON.stringify({
                          sdp: connections[fromId].localDescription
                        })
                      );
                    })
                    .catch(e => console.log(e));
                })
                .catch(e => console.log(e));
            }
          })
          .catch(e => console.log(e));
      }

      if (signal.ice) {
        connections[fromId]
          .addIceCandidate(new RTCIceCandidate(signal.ice))
          .catch(e => console.log(e));
      }
    }
  }

  addRemoteVideo = (stream, id) => {
    if (this.state.members <= 6) {
      let div = document.createElement("div");
      let video = document.createElement("video");
      video.setAttribute("data-socket", id);
      video.setAttribute("class", "video");
      video.srcObject = stream;
      video.autoplay = true;
      video.muted = true;
      video.playsinline = true;
      div.appendChild(video);
      this.remoteVideos.appendChild(div);
    } else {
      let div = document.createElement("div");
      let span = document.createElement("span");
      span.setAttribute("data-socket", id);
      span.innerHTML = "<strong>mas</strong>";
      div.appendChild(span);
      this.remoteVideos.appendChild(div);
    }
    this.setState({ members: this.state.members + 1 });
  };

  render() {
    console.log("remder");
    return (
      <MeetStyled members={this.state.members}>
        <div
          className="content-videos"
          ref={div => (this.remoteVideos = div)}
        ></div>
      </MeetStyled>
    );
  }
}

export default Meet;
