import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openTradeWindow: (uid, mode = "BUY") => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [tradeState, setTradeState] = useState({
    isOpen: false,
    uid: "",
    mode: "BUY",
  });

  const handleOpenTradeWindow = (uid, mode = "BUY") => {
    setTradeState({ isOpen: true, uid, mode });
  };

  const handleCloseTradeWindow = () => {
    setTradeState({ isOpen: false, uid: "", mode: "BUY" });
  };

  return (
    <GeneralContext.Provider
      value={{
        openTradeWindow: handleOpenTradeWindow,
        closeBuyWindow: handleCloseTradeWindow,
      }}
    >
      {props.children}
      {tradeState.isOpen && (
        <BuyActionWindow uid={tradeState.uid} mode={tradeState.mode} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
