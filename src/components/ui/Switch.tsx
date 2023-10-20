import { motion } from "framer-motion";
import React from "react";

interface SwitchProps {
  setIsOn: (state: boolean) => void;
  isOn: boolean;
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const Switch: React.FC<SwitchProps> = ({ setIsOn, isOn }) => {
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div
      className={`w-full h-full dark:bg-transparent dark:border-white dark:border-2 flex justify-start items-center rounded-full p-2 cursor-pointer ${
        isOn ? "justify-end" : ""
      }`}
      onClick={toggleSwitch}
    >
      <motion.div
        className="md:w-10 md:h-10 w-5 h-5 rounded-full bg-white"
        layout
        transition={spring}
      />
    </div>
  );
};

export default Switch;
