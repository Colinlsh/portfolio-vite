import React from "react";
import { ResumeModel } from "../../app/models";
import { Tooltip } from "@material-tailwind/react";

interface ResumeProps {
  resumeModel: ResumeModel;
}

const ResumeCard: React.FC<ResumeProps> = ({ resumeModel }) => {
  return (
    <div className="text-white rounded-lg w-full flex space-x-5">
      <Tooltip content={resumeModel.period}>
        <div className="font-bold w-fit text-left select-none">
          {resumeModel.year} {resumeModel.is_present ? "- present" : ""}
        </div>
      </Tooltip>
      <div className="text-left select-none">
        {resumeModel.company_name} . {resumeModel.role} . {resumeModel.location}
      </div>
    </div>
  );
};

export default ResumeCard;
