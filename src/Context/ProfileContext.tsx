"use client";
import React from "react";

interface IProfileContextProps {
  profiles: TProfile[];
}

export const ProfileContext = React.createContext<IProfileContextProps>({ profiles: []});

export const ProfileContextProvider = (props: any) => {
  return <ProfileContext.Provider value={{ profiles: [] }}>{props.children}</ProfileContext.Provider>;
};
