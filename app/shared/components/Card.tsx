import React, { ReactNode } from "react";
interface CardProps {
  Icon?: (props: {}) => ReactNode;
  label: string | ReactNode;
  size: string;
}
const sizeMapper: { [key: string]: { text: string } } = {
  large: {
    text: "text-lg",
  },
  small: {
    text: "text-lg",
  },
};
export const Card = (props: CardProps) => {
  const { label, Icon, size } = props;
  return (
    <div className="h-full w-full bg-light p-6 border border-1 border-mid-grey">
      {Icon ? <Icon /> : <></>}
      <span className={sizeMapper[size].text}>{label}</span>
    </div>
  );
};
