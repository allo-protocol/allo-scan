"use client";

import { Context } from "@/Context/Context";
import SelectTabs from "@/components/Tabs/SelectTabs";
import TabContent from "@/components/Tabs/TabContent";
import { useContext } from "react";

export default function Home() {
  const { network, setNetwork } = useContext(Context);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div
        className="hero-content text-center w-full"
      >
        {/* content size */}
        <div className="">
          <SelectTabs />
          <TabContent />
        </div>
      </div>
    </div>
  );
}
