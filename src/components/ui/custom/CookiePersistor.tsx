import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Persistor } from "redux-persist/lib/types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";

interface cookiePersistorProps {
  children: React.ReactNode;
  persistor: Persistor;
}

const CookiePersistor: React.FC<cookiePersistorProps> = ({
  children,
  persistor,
}) => {
  const uiState = useAppSelector((state: RootState) => state.uiState);

  if (!uiState.cookie.isPersist) {
    // console.log("no persist");
    return <>{children}</>;
  }

  return (
    <>
      {console.log("persisting...")}
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </>
  );
};

export default CookiePersistor;
