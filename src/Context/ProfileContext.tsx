"use client";
import React, { useState } from "react";
import { Slugs } from "@/types/types";

interface IProfileContextProps {
  profiles: TProfile[];
  network: Slugs;
  setNetwork: (network: Slugs) => void;
}

export const ProfileContext = React.createContext<IProfileContextProps>({
  profiles: [],
  network: Object.values(Slugs)[0],
  setNetwork: () => {},
});

export const ProfileContextProvider = (props: any) => {
  const [network, setNetwork] = useState(Object.values(Slugs)[0]);

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
