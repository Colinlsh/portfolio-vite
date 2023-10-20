import React from "react";
import { BsLinkedin } from "react-icons/bs";

const ConnectWithMe = () => {
  return (
    <div
      id="contact"
      className="h-full w-full flex justify-center items-center"
    >
      <p>{"Find me @ "}</p>
      <div
        className="ml-2"
        onClick={() => {
          window.open("https://www.linkedin.com/in/colinlsh88888888/");
        }}
      >
        <BsLinkedin />
      </div>
    </div>
  );
};

export default ConnectWithMe;
