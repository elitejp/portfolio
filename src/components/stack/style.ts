import styled from "styled-components";
import { keyframes } from "styled-components";

const scaleUp = keyframes({
  "0%": { transform: "translateY(15%)" },
  "100%": { transform: "translateY(-140%)" },
});

export const StackCard = styled.div`
  border-radius: 5%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  p {
    opacity: 0;
    position: absolute;
    transform: translateY(-15%);
    background: var(--white);
    color: var(--red200);
    box-shadow: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.12));
    padding: 0.4rem 1rem;
    border-radius: 5%;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    white-space: nowrap;

    &:before {
      content: "";
      z-index: -1;
      bottom: -5px;
      position: absolute;
      width: 0;
      height: 0;
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      border-top: 25px solid var(--white);
      transform: translateX(-50%);
      left: 50%;
    }
  }

  &:hover {
    p {
      opacity: 1;
      top: 0;
      transform: translateY(-140%);
      animation: ${scaleUp} 200ms;
    }
  }
`;
