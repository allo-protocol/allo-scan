"use client";
import React from "react";

interface IPoolContextProps {
  pools: [];
}

export const PoolContext = React.createContext<IPoolContextProps>({
  pools: [],
});

export const PoolContextProvider = (props: any) => {
  return (
    <PoolContext.Provider value={{ pools: [] }}>
      {props.children}
    </PoolContext.Provider>
  );
};
