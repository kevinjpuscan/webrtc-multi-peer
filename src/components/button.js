import React from "react";
import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 100%;
  padding: 1em 1.5em;
  background: ${props =>
    props.rounder ? "none" : props.success ? "var(--success)" : "var(--main)"};
  border-radius: 10px;
  color: ${props =>
    props.rounder
      ? props.success
        ? "var(--success)"
        : "var(--main)"
      : "white"};
  cursor: pointer;
  text-align: center;
  font-size: 0.9em;
  font-weight: 700;
  border: ${props =>
    props.rounder
      ? props.success
        ? "2px solid var(--success)"
        : "2px solid var(--main)"
      : "none"};
`;
function Button({ text, rounder, onClick, success }) {
  return (
    <ButtonStyled rounder={rounder} onClick={onClick} success={success}>
      {text}
    </ButtonStyled>
  );
}

export default Button;
