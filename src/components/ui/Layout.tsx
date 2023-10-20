import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Footer from "../Footer";
import Modal from "./modal/Modal";
import Navbar2 from "./navbar/Navbar2";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const uiState = useAppSelector((state: RootState) => state.uiState);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (uiState.cookie.isCookieAnswered === true) {
  //     const _cookiesTimer = setTimeout(() => {
  //       dispatch(setIsCookiesAnswered(false));
  //       dispatch(resetState);
  //     }, uiState.cookie.cookieExpiry);

  //     return () => clearTimeout(_cookiesTimer);
  //   }
  // }, [uiState.cookie.isCookieAnswered]);

  return (
    <div className="h-full w-full flex flex-col justify-between dark:bg-customDark">
      <Navbar2 />
      {children}
      <Footer />
      {uiState.modal.isShow ? (
        <Modal
          header={uiState.modal.header}
          message={uiState.modal.message}
          yesCallback={uiState.modal.yesCallback}
          yesButtonText="ok"
          messageJSX={uiState.modal.messageJSX}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Layout;
