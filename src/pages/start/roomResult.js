import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/button";
import CONFIG from "../../config";

export const RoomResultStyled = styled.div`
  background: rgba(0, 0, 0, 0.03);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .text-url {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 15px;
  }
`;

function RoomResult({ url }) {
  let [copied, setCopied] = useState(false);
  function handleClick() {
    let text = document.createElement("input");
    text.setAttribute("value", `${CONFIG.URL + url}`);
    document.body.appendChild(text);
    text.select();
    document.execCommand("copy");
    document.body.removeChild(text);
    setCopied(true);
  }

  return (
    <RoomResultStyled>
      <input
        className="text-url"
        type="text"
        disabled
        value={`${CONFIG.URL + url}`}
      />
      <Button
        text={copied ? "Copiado" : "Copiar"}
        rounder
        onClick={handleClick}
        success={copied}
      />
    </RoomResultStyled>
  );
}

export default RoomResult;
