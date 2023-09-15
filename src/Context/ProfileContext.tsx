"use client";
import React, { useState } from "react";
import { Slug } from "@/types/types";

interface IProfileContextProps {
  profiles: TProfile[];
  network: Slug;
  setNetwork: (network: Slug) => void;
}

export const ProfileContext = React.createContext<IProfileContextProps>({
  profiles: [],
  network: Object.values(Slug)[0],
  setNetwork: () => {},
});

export const ProfileContextProvider = (props: any) => {
  const [network, setNetwork] = useState(Object.values(Slug)[0]);

  return (
    <ProfileContext.Provider
      value={{
        profiles: [],
        network: network,
        setNetwork: setNetwork,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};
