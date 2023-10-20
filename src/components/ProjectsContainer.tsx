import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

import Card from "./ui/Card";
import Carousel from "./ui/Carousel";
import Spinner from "./ui/Spinner";
import Switch from "./ui/Switch";

interface ProjectContainerProps {}

const ProjectsContainer: React.FC<ProjectContainerProps> = () => {
  const [isCarousel, setIsCarousel] = useState(false);

  const portFolioState = useAppSelector((state: RootState) => state.portFolio);

  if (portFolioState.projects === undefined) {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-white dark:bg-customDark">
        <Spinner SpinnerColor="text-black dark:text-white" />
      </div>
    );
  }

  return (
    <div
      id="projects"
      className="h-screen w-full bg-white dark:bg-customDark z-10 flex px-20 md:px-60 flex-col justify-center gap-2 "
    >
      <h1 className="h-fit font-bold text-left w-full text-2xl">Projects</h1>
      <div className="w-full h-fit flex items-center justify-around ">
        <div className="flex justify-center w-[25%]">Card</div>
        <div className=" w-[30%] lg:w-[15%] flex">
          <Switch setIsOn={setIsCarousel} isOn={isCarousel} />
        </div>
        <div className="flex justify-center w-[25%]">Carousel</div>
      </div>
      <div className="w-full h-fit flex">
        {isCarousel ? (
          <div className="flex flex-col w-full h-full">
            <Carousel
              isInfinite={true}
              hasIndicator={true}
              isIndicatorOutside={true}
              intervalTime={5000}
              childrens={portFolioState.projects.map((x) => (
                <motion.div
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card cardModel={{ ...x }} />
                </motion.div>
              ))}
            />
          </div>
        ) : (
          <div className="relative h-fit w-full flex flex-col space-y-5 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-2 ">
            {portFolioState.projects.map((x, index) => (
              <motion.div
                key={`${x}${index}`}
                className={`h-[100%] w-full`}
                initial={{
                  x: `${index % 2 === 0 ? 100 : -100}`,
                }}
                whileInView={{
                  x: 0,
                }}
                transition={{
                  type: "spring",
                  duration: 2,
                  delay: 0.1,
                  damping: 30,
                  stiffness: 500,
                  restDelta: 1,
                  delayChildren: 1,
                }}
              >
                <motion.div
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card cardModel={{ ...x }} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsContainer;
