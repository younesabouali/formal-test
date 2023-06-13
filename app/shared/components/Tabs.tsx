import React, { ReactNode } from "react";
interface TabsProps {
  tabs: {
    label: string;
    Icon?: (props: {}) => ReactNode;
  }[];
  selected?: string;
}
export const Tabs = (props: TabsProps) => {
  const { tabs, selected } = props;
  return (
    <div className="w-full flex xs:flex-wrap">
      {tabs.map(({ label, Icon }, index) => (
        <div
          key={index}
          className={`${
            selected === label ? "bg-black" : "bg-light"
          } cursor-pointer px-6 flex items-center justify-between w-full basis-full  h-12 "`}
        >
          <span className={`${selected === label ? "text-white" : "text-black"}`}>
            {label}
          </span>
          {Icon ? <Icon /> : null}
        </div>
      ))}
    </div>
  );
};
