"use client";
import { Slugs, Tabs } from "@/types/types";
import React, { useState } from "react";

interface IContextProps {
  network: Slugs;
  setNetwork: (network: Slugs) => void;
  tab: Tabs;
  setTab: (tab: Tabs) => void;
}

export const Context = React.createContext<IContextProps>({
  network: Object.values(Slugs)[0],
  setNetwork: () => {},
  tab: Object.values(Tabs)[0],
  setTab: () => {},
});

export const ContextProvider = (props: any) => {
  const [network, setNetwork] = useState(Object.values(Slugs)[0]);
  const [tab, setTab] = useState(Object.values(Tabs)[0]);

  return (
    <Context.Provider
      value={{
        network: network,
        setNetwork: setNetwork,
        tab: tab,
        setTab: setTab,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
