import React from "react";
import {
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiReact,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";
import Carousel from "./ui/Carousel";

const TechStacks = () => {
  return (
    <div
      id="techstacks"
      className="h-screen w-full flex flex-col justify-center items-center z-0 snap-start bg-white"
    >
      <h1 className="text-4xl font-semibold">What i use</h1>
      <div className="md:h-[50%] w-full flex justify-center items-center p-5 space-y-5">
        <Carousel
          childrens={[
            <SiReact className="h-full w-full bg-white rounded-lg" />,
            <SiTypescript className="h-full w-full bg-white rounded-lg" />,
            <SiTailwindcss className="h-full w-full bg-white rounded-lg" />,
            <SiPython className="h-full w-full bg-white rounded-lg" />,
            <SiPostgresql className="h-full w-full bg-white rounded-lg" />,
            <SiFastapi className="h-full w-full bg-white rounded-lg" />,
            <SiSolidity className="h-full w-full bg-white rounded-lg" />,
          ]}
          intervalTime={2000}
          isInfinite={true}
        />
      </div>
    </div>
  );
};

export default TechStacks;
