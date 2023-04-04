import React from "react";
import { stackData } from "utils/stackData";
import { StackCards, StyledHeader, UserImage } from "./style";
import { userData } from "utils/userData";
import Stack from "components/stack";

const Home: React.FC = () => {
  return (
    <>
      <h1>Home</h1>
      <StyledHeader>
        <UserImage
          src={`https://github.com/${userData.githubUser}.png`}
          alt={userData.nameUser}
          title={userData.nameUser}
        />
        <p>Hello, my name is {userData.nameUser}</p>

        <StackCards>
          {stackData.map((stack, index) => (
            <Stack key={index} title={stack.title} logo={stack.img} />
          ))}
        </StackCards>
      </StyledHeader>
    </>
  );
};

export default Home;
