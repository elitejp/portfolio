import styled from "styled-components";
import background1 from "images/background/background-1.jpg";

export const StyledHeader = styled.div`
  background-color: var(--black200);
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      0deg,
      rgba(0, 7, 13, 1) 0%,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 0) 80%,
      rgba(0, 7, 13, 1) 100%
    ),
    url(${background1});

  padding: 9rem 0 6rem 0;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  width: 2.25rem;
  height: 2.25rem;

  @media screen and (min-width: 768px) {
    width: 5rem;
    height: 5rem;
  }

  @media screen and (min-width: 1024px) {
    width: 10rem;
    height: 10rem;
  }
`;

export const StackCards = styled.div`
  display: flex;
`;
