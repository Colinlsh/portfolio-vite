import React from "react";
import { BsGithub } from "react-icons/bs";
import { Project } from "../../API";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  cardModel?: Project;
}

const Card: React.FC<CardProps> = ({ cardModel, ...props }) => {
  return (
    <div
      className="min-h-96 min-w-96 h-full w-full rounded-lg flex flex-col justify-between bg-white dark:bg-customDark drop-shadow-xl border-black dark:border-white border-2 p-5"
      {...props}
    >
      {cardModel !== undefined ? (
        <>
          <div className="h-[60%] space-y-2">
            <h1 className="text-lg font-semibold">{cardModel!.header}</h1>
            {cardModel!.imageURL !== undefined &&
            cardModel!.imageURL !== null ? (
              <img
                src={cardModel!.imageURL!}
                className="cursor-pointer"
                onClick={() => {
                  if (cardModel!.externalURL !== undefined) {
                    window.open(cardModel!.externalURL![0] as string);
                  }
                }}
              />
            ) : cardModel!.externalURL !== undefined &&
              cardModel!.externalURL !== null ? (
              cardModel!.externalURL.map((x: any, index: number) => (
                <div
                  key={`${x}${index}`}
                  className="text-blue-500 underline cursor-pointer"
                  onClick={() => {
                    console.log(cardModel!.externalURL);
                    if (cardModel!.externalURL !== undefined) {
                      window.open(x);
                    }
                  }}
                >
                  Project site {index + 1}
                </div>
              ))
            ) : (
              <></>
            )}
            <p className="text-justify h-full w-full">
              {cardModel!.description}
            </p>
          </div>
          <div className="flex flex-col w-full h-[40%] items-end">
            {cardModel!.githubURL !== undefined &&
            cardModel!.githubURL !== null ? (
              <div className="flex w-full space-x-5 cursor-pointer">
                {cardModel!.githubURL.map((x: any, index: number) => (
                  <BsGithub
                    key={`${x}${index}`}
                    onClick={() => {
                      window.open(x);
                    }}
                  />
                ))}
              </div>
            ) : (
              <></>
            )}
            {cardModel!.techStacks !== undefined ? (
              <div className="h-full w-full grid grid-cols-3 items-end">
                {cardModel!.techStacks!.map((x: any, index: number) => (
                  <div
                    key={`${x}${index}`}
                    className="h-10 flex justify-start items-center"
                  >
                    {x}
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Card;
