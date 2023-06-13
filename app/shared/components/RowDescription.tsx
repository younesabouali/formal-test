import React, { ReactNode } from "react";
interface RowDescriptionProps {
  name: String;
  value?: ReactNode;
}
export const RowDescription = (props: RowDescriptionProps) => {
  const { value, name } = props;
  return (
    <div className="flex justify-between w-full">
      <span className="text-grey-text text-sm">{name}</span>
      <span className="text-sm">{value}</span>
    </div>
  );
};
