"use client";

import { useState } from "react";
import { joinClasses } from "@/lib/utils";

type Tab = {
  id: string;
  label: string;
  panel: React.ReactNode;
};

export function Tabs({ tabs, label }: { tabs: Tab[]; label: string }) {
  const [active, setActive] = useState(tabs[0]?.id);

  return (
    <div className="tabs">
      <div aria-label={label} className="tab-list" role="tablist">
        {tabs.map((tab) => (
          <button
            aria-controls={`${tab.id}-panel`}
            aria-selected={active === tab.id}
            className={joinClasses("tab", active === tab.id && "tab-active")}
            id={`${tab.id}-tab`}
            key={tab.id}
            onClick={() => setActive(tab.id)}
            role="tab"
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          aria-labelledby={`${tab.id}-tab`}
          hidden={active !== tab.id}
          id={`${tab.id}-panel`}
          key={tab.id}
          role="tabpanel"
        >
          {tab.panel}
        </div>
      ))}
    </div>
  );
}
