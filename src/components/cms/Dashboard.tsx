import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { resetGithubExternalURLCount } from "../../app/slice/uiStateSlice";
import AddProjectForm from "./ui/AddProjectForm";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetGithubExternalURLCount(true));
    };
  }, []);

  return (
    <div className="dark:text-white dark:bg-customDark h-screen w-full z-0 px-10 flex justify-center items-center">
      <AddProjectForm />
    </div>
  );
};

export default Dashboard;
