import React from "react";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      id="footer"
      className="w-full bg-white dark:bg-customDark text-gray-300 lg:text-base py-5 px-20 md:px-60 bottom-0"
    >
      <div className="flex flex-col w-full py-4 justify-between sm:flex-row text-center text-gray-500 ">
        <div className="py-4 flex flex-col justify-start items-start space-y-2">
          <p>Colin Lee -</p>
          <p>I do anything</p>
        </div>
        <div className="py-4 flex flex-col justify-start items-start space-y-2">
          <p>Socials -</p>
          <div
            className="flex items-center justify-center space-x-2"
            onClick={() => {
              window.open("https://www.linkedin.com/in/colinlsh88888888/");
            }}
          >
            <div>Linkedin</div>
            <BsLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
