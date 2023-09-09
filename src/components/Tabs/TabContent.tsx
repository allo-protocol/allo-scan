import { Context } from "@/Context/Context";
import { Tabs } from "@/types";
import { useContext } from "react";
import Overview from "./Overview";

const TabContent = () => {

  const { tab } = useContext(Context);

  const loadContent = () => {
    switch (tab) {
      case Tabs.IDENTITIES:
        return <div>IDENTITIES</div>;
      case Tabs.POOLS:
        return <div>POOLS</div>;
        case Tabs.OVERVIEW:
        default:
        return <Overview />;
    }
  };


  return (
    <div className="tab-content justify-center">
      <div className="p-2 card shadow-lg compact bg-base-100">
        <div className="card-body">
          <h2 className="card-title">{tab}</h2>
          {loadContent()}
        </div>
      </div>
    </div>
  );
}

export default TabContent;