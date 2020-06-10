import React from "react";

class video extends React.Component {
  componentDidMount = () => {
    this.props.connection.onaddstream = function(event) {
      this.remoteVideo.srcObject = event.stream;
    };
  };
  render() {
    return (
      <video
        id="remote1"
        autoPlay
        muted
        ref={video => (this.remoteVideo = video)}
        style={{ width: "300px", height: "100px" }}
      ></video>
    );
  }
}

export default video;
