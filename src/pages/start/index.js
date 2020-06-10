import React, { Component } from "react";
import styled from "styled-components";
import Wrapper from "../../components/wrapper";
import Button from "../../components/button";
import RoomResult from "./roomResult";
import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";
import CONFIG from "../../config";

export const StartStyled = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--background);
  margin: 0;
  padding: 0;

  .container-card {
    position: absolute;
    width: 90%;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: ${props => props.heght};
    margin: auto;
  }
  .card {
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 15px;
    padding: 50px 30px;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.025);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .title-form {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    color: var(--gray-black);
  }

  #description {
    color: var(--gray);
    text-align: center;
    font-weight: 400;
    font-size: 0.8em;
  }

  @media (min-width: 1200px) {
    .card {
      width: 35%;
      margin: auto;
    }
  }
`;

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "35%",
      created: false,
      url: ""
    };
    this.handleClickCreate = this.handleClickCreate.bind(this);
    this.createHash = this.createHash.bind(this);
  }

  handleClickCreate = () => {
    if (this.state.created) {
      this.props.history.push(this.state.url);
    }
    let hash = this.createHash();
    this.setState({
      created: true,
      height: "60%",
      url: `/meet/${hash}`
    });
  };

  createHash = () => {
    const message = new Date().getTime(),
      nonce = 100,
      privateKey = CONFIG.SECRET_KEY; // ...
    const hashDigest = sha256(nonce + message);
    let hmacDigest = Base64.stringify(hmacSHA512(hashDigest, privateKey));
    hmacDigest = hmacDigest.replace(/\//gi, "k");
    return hmacDigest;
  };

  render() {
    return (
      <StartStyled heght={this.state.height}>
        <Wrapper>
          <div className="container-card">
            <div className="card">
              <div className="form-create">
                <div className="title-form">Bienvenido</div>
                <p id="description">
                  Hola, crea una nueva sala y comparte el link con tus amigos,
                  así de simple.
                </p>
                <Button
                  text={this.state.created ? "Ingresar" : "Crear Sala"}
                  onClick={this.handleClickCreate}
                  success={this.state.created}
                />
              </div>

              {this.state.created && <RoomResult url={this.state.url} />}
            </div>
          </div>
        </Wrapper>
      </StartStyled>
    );
  }
}

export default Start;
