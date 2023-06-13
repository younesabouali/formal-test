import React, { ReactNode } from "react";
interface CardProps {
  Icon?: (props: {}) => ReactNode;
  label: string | ReactNode;
  size: string;
}
const sizeMapper: { [key: string]: { text: string,width: string } } = {
  large: {
    text: "text-lg",
    width:"md:w-[300px]"
  },
  small: {
    text: "text-lg",
    width:"lg:w-[170px]"
  },
};
export const Card = (props: CardProps) => {
  const { label, Icon, size } = props;
  return (
    <div className={"h-full bg-light p-6 border border-1 border-mid-grey mt-3 xs:w-full sm:w-[calc(50%-3px)] " +sizeMapper[size].width }>
      {Icon ? <Icon /> : <></>}
      <span className={sizeMapper[size].text}>{label}</span>
    </div>
  );
};
