import { Context } from "@/Context/Context";
import Profile from "@/components/Registry/Profile";
import { Tabs } from "@/types/types";
import { useContext } from "react";
import Pool from "../Allo/Pool";
import Overview from "./Overview";

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

  return <div>{loadContent()}</div>;
};

export default TabContent;
