"use client";
import { Slugs } from "@/types/types";
import React, { useState } from "react";

interface IContextProps {
  network: Slugs;
  setNetwork: (network: Slugs) => void;
}

export const Context = React.createContext<IContextProps>({
  network: Object.values(Slugs)[0],
  setNetwork: () => {},
});

export const ContextProvider = (props: any) => {
  const [network, setNetwork] = useState(Object.values(Slugs)[0]);

  return (
    <Context.Provider
      value={{
        network: network,
        setNetwork: setNetwork,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
