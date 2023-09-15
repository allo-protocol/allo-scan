"use client";
import { Slug } from "@/types/types";
import React, { useState } from "react";

interface IContextProps {
  network: Slug;
  setNetwork: (network: Slug) => void;
}

export const Context = React.createContext<IContextProps>({
  network: Object.values(Slug)[0],
  setNetwork: () => {},
});

export const ContextProvider = (props: any) => {
  const [network, setNetwork] = useState(Object.values(Slug)[0]);

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
