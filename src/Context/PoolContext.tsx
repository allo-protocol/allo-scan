"use client";
import React from "react";

type Pool = {
    id: number;
    name: string;
    address: string;
    balance: number;
}

interface IPoolContextProps {
  pools: Pool[];
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
