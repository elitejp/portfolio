import React from "react";
import { stackData } from "../../utils/stackData";

const Home: React.FC = () => {
  return (
    <>
      <h1>Home</h1>
      {stackData.map((stack, index) => (
        <img
          key={index}
          src={stack.img}
          alt={stack.title}
          height="84px"
          width="84px"
        />
      ))}
    </>
  );
};

export default Home;
