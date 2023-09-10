import { Context } from "@/Context/Context";
import { Tabs } from "@/types/types";
import { useContext } from "react";
import Overview from "./Overview";
import Profile from "@/components/Registry/Profile";
import Pool from "../Allo/Pool";

const TabContent = () => {
  const { tab } = useContext(Context);

  const loadContent = () => {
    switch (tab) {
      case Tabs.PROFILE:
        return <Profile />;
      case Tabs.POOL:
        return <Pool />;
      case Tabs.OVERVIEW:
        return <Overview />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="tab-content">
      <div className="p-2 card shadow-lg compact bg-base-100">
        <div className="card-body flex flex-row align-middle justify-between">
          <h2 className="card-title">{tab}</h2>
        </div>
        <div className="flex flex-col">{loadContent()}</div>
      </div>
    </div>
  );
};

export default TabContent;
