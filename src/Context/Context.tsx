"use client";
import { Slug, Tabs } from "@/types/types";
import React, { useState } from "react";

interface IContextProps {
  network: Slug;
  setNetwork: (network: Slug) => void;
  tab: Tabs;
  setTab: (tab: Tabs) => void;
}

export const Context = React.createContext<IContextProps>({
  network: Object.values(Slug)[0],
  setNetwork: () => {},
  tab: Object.values(Tabs)[0],
  setTab: () => {},
});

export const ContextProvider = (props: any) => {
  const [network, setNetwork] = useState(Object.values(Slug)[0]);
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
