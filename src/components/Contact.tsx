import React from "react";
import ConnectWithMe from "./ui/ConnectWithMe";

const Contact = () => {
  return (
    <div className="h-screen w-full flex flex-col space-y-2 justify-center items-center bg-white dark:bg-customDark z-0">
      <ConnectWithMe />
    </div>
  );
};

export default Contact;
