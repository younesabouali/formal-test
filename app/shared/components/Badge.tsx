import React from "react";
interface BadgeProps {
  size?: string;
  color: string;
  label: string;
}
const colorMapper: { [key: string]: { bg: string; text: string } } = {
  "light-pink": {
    text: "text-black",
    bg: "bg-light-pink",
  },

  "light-grey": {
    text: "text-black",
    bg: "bg-light-grey",
  },
  "thrive-dark-blue":{
    bg:"bg-thrive-dark-blue bg-opacity-20",
    text:"text-thrive-dark-blue"
  },
  "dark-off-white":{
    bg:"bg-dark-off-white",
    text:"text-black"
  }
};
const sizeMapper: { [key: string]: { padding: string } } = {
  small: { padding: " px-0.5  h-[26px] rounded " },
  medium: { padding: " px-1.5  h-[26px] rounded-sm" },
};
export const Badge = (props: BadgeProps) => {
  let { color, label, size } = props;
  if (!size) size = "small";
  return (
    <div
      className={
        `${colorMapper[color].bg}  flex items-center  overflow-hidden ` +
        sizeMapper[size].padding
      }
    >
      <p className={`${colorMapper[color].text} text-xs leading-none m-0`}>
        {label}
      </p>
    </div>
  );
};
