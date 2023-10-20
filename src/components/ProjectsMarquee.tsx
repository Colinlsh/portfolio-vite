import { useContext, useRef } from "react";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import Card from "./ui/Card";
import Marquee from "./ui/marquee/Marquee";
import { ScrollContext } from "./ui/ScrollObserver";
import Spinner from "./ui/Spinner";

const ProjectsMarquee = () => {
  const portFolioState = useAppSelector((state: RootState) => state.portFolio);

  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  let clientHeight = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
    clientHeight = elContainer.clientHeight;
  }

  if (portFolioState.projects === undefined) {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-white">
        <Spinner SpinnerColor="text-black" />
      </div>
    );
  }

  return (
    <div
      id="projects"
      className="h-fit w-full bg-white z-10 px-10 py-14 md:py-20 md:px-44 flex overflow-hidden"
      style={{
        boxShadow: "0 -1em 1em -1em rgba(0, 0, 0, 0.5)",
      }}
      ref={refContainer}
    >
      <Marquee
        childrens={portFolioState.projects.map((x) => (
          <Card cardModel={{ ...x }} style={{ width: "20rem" }} />
        ))}
      />
    </div>
  );
};

export default ProjectsMarquee;
