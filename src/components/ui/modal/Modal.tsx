import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { setCloseModal } from "../../../app/slice/uiStateSlice";
import Button from "../custom/Button";

interface ModalProps {
  header: string;
  message: string;
  yesButtonText?: string;
  noButtonText?: string;
  yesCallback?: () => void;
  noCallback?: () => void;
  messageJSX?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  header,
  message,
  yesCallback,
  noCallback,
  yesButtonText = "Yes",
  noButtonText = "No",
  messageJSX,
}) => {
  // #region redux
  const dispatch = useAppDispatch();
  // #endregion
  return (
    <div className="fixed flex justify-center items-center top-0 right-0 h-screen w-full bg-black bg-opacity-50 z-50">
      <div className="bg-white flex flex-col relative h-[30%] w-[50%] rounded-2xl p-5">
        <h1 className="h-[20%] w-full text-left flex items-center font-bold text-lg">
          {header}
        </h1>
        <p className="h-[60%] w-full">{message}</p>
        <div className="h-[20%] w-full flex justify-end items-center">
          {noCallback === undefined ? (
            <></>
          ) : (
            <Button
              onClick={
                noCallback !== undefined
                  ? noCallback
                  : () => dispatch(setCloseModal(true))
              }
              label={noButtonText}
            />
          )}
          <Button
            label={yesButtonText}
            className="px-5 py-1 bg-customDark border-thin"
            onClick={
              yesCallback !== undefined
                ? yesCallback
                : () => dispatch(setCloseModal(true))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
