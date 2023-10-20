import React from "react";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import ResumeCard from "./ui/ResumeCard";

const ResumeContainer = () => {
  const portFolioState = useAppSelector((state: RootState) => state.portFolio);
  return (
    <div
      id="resume"
      className="h-screen w-full bg-white dark:bg-customDark z-10 py-10 lg:py-20 px-20 md:px-60 flex flex-col overflow-hidden gap-2 items-center justify-center"
      style={{
        boxShadow: "0 -1em 1em -1em rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        id="resume"
        className={`sticky h-fit w-full flex flex-col gap-y-6 justify-center items-center z-0`}
      >
        <h1 className="font-bold text-left w-full text-2xl">My journey</h1>
        {portFolioState.resume.map((x) => (
          <ResumeCard key={x.id} resumeModel={x} />
        ))}
      </div>
    </div>
  );
};

export default ResumeContainer;
