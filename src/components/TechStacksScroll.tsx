import { motion, useScroll } from "framer-motion";
import React, { useContext, useRef } from "react";
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
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { ScrollContext } from "./ui/ScrollObserver";

const TechStacksScroll = () => {
  const refTechScroll = useRef<HTMLDivElement>(null);
  const refTopTechStack = useRef<HTMLDivElement>(null);
  const refBottomTechStack = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  let topWidth = 0;
  let bottomWidth = 0;

  const { current: techScrollContainer } = refTechScroll;
  if (techScrollContainer) {
    progress = Math.min(
      1,
      techScrollContainer.clientHeight /
        techScrollContainer.getBoundingClientRect().bottom
    );
  }

  const { current: elTopContainer } = refTopTechStack;
  if (elTopContainer) {
    topWidth = elTopContainer.clientWidth;
  }

  const { current: elBottomContainer } = refBottomTechStack;
  if (elBottomContainer) {
    bottomWidth = elBottomContainer.clientWidth;
  }

  return (
    <div
      ref={refTechScroll}
      id="techstacks"
      className="relative h-screen w-full p-10 lg:py-10 overflow-hidden bg-white dark:bg-customDark"
    >
      <div
        ref={refTopTechStack}
        className={`w-full h-[20%] fixed right-full top-40 rounded-lg transition-opacity duration-200 flex justify-between items-center gap-2 px-20 md:px-60 ${
          progress === 1 ? `absolute` : ""
        } ${progress > 0.8 ? `opacity-1` : "opacity-0"}`}
        style={{
          transform: `translateX(${topWidth * progress}px)`,
        }}
      >
        <SiReact className="xs:h-[50%] h-full w-fit" />
        <SiTypescript className="xs:h-[50%] h-full w-fit" />
        <SiTailwindcss className="xs:h-[50%] h-full w-fit" />
        <SiPython className="xs:h-[50%] h-full w-fit" />
      </div>

      <h1
        className="w-full h-full text-4xl lg:text-6xl scale-10 opacity-5 flex justify-center items-center text-center z-0 font-bold"
        style={{
          transform: `scale(${progress * 1.5})`,
          opacity: `${progress}`,
        }}
      >
        What I use
      </h1>
      <div
        ref={refBottomTechStack}
        className={`w-full h-[20%] flex justify-between fixed left-full bottom-40 rounded-lg gap-2 transition-opacity duration-200 items-center px-20 md:px-60 ${
          progress === 1 ? `absolute` : ""
        } ${progress > 0.6 ? `opacity-1` : "opacity-0"}`}
        style={{
          transform: `translateX(-${topWidth * progress}px)`,
        }}
      >
        <SiPostgresql className="xs:h-[50%] h-full w-fit " />
        <SiFirebase className="xs:h-[50%] h-full w-fit" />
        <SiFastapi className="xs:h-[50%] h-full w-fit" />
        <SiSolidity className="xs:h-[50%] h-full w-fit" />
      </div>
    </div>
  );
};

export default TechStacksScroll;
