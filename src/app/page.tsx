"use client";

import { Context } from "@/Context/Context";
import SelectTabs from "@/components/Tabs/SelectTabs";
import TabContent from "@/components/Tabs/TabContent";
import { useContext } from "react";

export default function Home() {
  const { network, setNetwork } = useContext(Context);

  return (
    <div className="min-h-screen bg-base-200">
      <div
        className="text-center w-full"
      >
        {/* content size */}
        <div className="flex flex-col align-top justify-center p-4">
          <SelectTabs />
          <TabContent />
        </div>
      </div>
    </div>
  );
}
