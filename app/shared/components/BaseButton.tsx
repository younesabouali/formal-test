import React, {
  ComponentType,
  ReactElement,
  ReactNode,
  MouseEvent,
} from "react";

interface BaseButtonProps {
  Icon?: (props: {}) => ReactNode;
  label?: string;
  color: string;
}
const colorMapping: {
  [key: string]: { text: string; border: string; background: string };
} = {
  danger: {
    text: "text-dark-grey",
    border: "border-danger",
    background: "bg-light-off-white",
  },

  "mid-grey": {
    text: "text-dark-grey",
    border: "border-mid-grey",
    background: "bg-mid-grey",
  },
  black: {
    text: "text-white",
    border: "border-black",
    background: "bg-black",
  },
};
export const BaseButton = (props: BaseButtonProps) => {
  const { Icon, label, color } = props;
  return (
    <button
      className={`" px-4 py-2 relative gap-x-1.5 flex gap-0.5 text-lg items-center border border-1 rounded-sm " ${colorMapping[color].border} ${colorMapping[color].background}`}
    >
      {Icon ? <Icon /> : <></>}
      {
        label ? 
      <span className={colorMapping[color].text}>{label}</span>:null
      }
    </button>
  );
};
