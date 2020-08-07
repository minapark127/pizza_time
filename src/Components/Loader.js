import React from "react";
import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 0;
    transform: scale(0);
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EmojiContainer = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
`;
const Emoji = styled.div`
  font-size: 55px;
  position: absolute;
  text-shadow: 2.5px 2.5px 10px rgba(128, 128, 128, 1),
    -3px -3px 10px rgba(128, 128, 128, 1);
  :first-child {
    animation: ${loadingAnimation} 1.6s 0s infinite ease-out;
  }
  :nth-child(2) {
    animation: ${loadingAnimation} 1.6s -0.8s infinite ease-out;
  }
`;

const Loader = () => (
  <Container>
    <EmojiContainer>
      <Emoji>
        <span role="img" aria-label="pizza">
          🍕
        </span>
      </Emoji>
      <Emoji>
        <span role="img" aria-label="popcorn">
          🍿
        </span>
      </Emoji>
    </EmojiContainer>
  </Container>
);
export default Loader;
