"use client";
import { Context } from "@/Context/Context";
import { Tabs } from "@/types/types";
import { useContext } from "react";
import SelectNetwork from "../SelectNetwork";

const SelectTabs = () => {
  const { tab, setTab } = useContext(Context);

  const setTabHandler = (_tab: Tabs) => {
    setTab(_tab);
  };

  return (
    <>
      <div className="flex w-100 justify-between p-3">
        <div className="tabs">
          {Object.values(Tabs).map((_tab, index) => (
            <div
              key={index}
              className={`tab tab-bordered ${_tab == tab ? "tab-active" : ""}`}
              onClick={() => setTabHandler(_tab)}
            >
              {_tab}
            </div>
          ))}
        </div>
        <div>
          <span className="text-sm mr-1">Selected Network:</span>
          <SelectNetwork />
        </div>
      </div>
    </>
  );
};

export default SelectTabs;
