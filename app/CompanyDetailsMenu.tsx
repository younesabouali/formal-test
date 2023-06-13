import React, { ReactNode, useRef, useState } from "react";
interface CompanyDetailsMenuProps {
  label?: ReactNode;
  position: string;
  hover?: Boolean;
  list?: {
    label?: ReactNode;
    list?: { label?: ReactNode; list?: { label?: ReactNode }[] }[];
  }[];
}
const positionMapper: { [key: string]: { position: string } } = {
  bottom: {
    position: " my-3 -left-[50%]",
  },
  right: {
    position: "mx-3 top-0 -right-[100%]",
  },
};
let timeout: NodeJS.Timeout;
export const CompanyDetailsMenu = (props: CompanyDetailsMenuProps) => {
  const { list, label, position, hover } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => {
    if (timeout && isOpen) clearTimeout(timeout);
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-pointer z-20"
    >
      <div
        onMouseLeave={handleMouseLeave}
        // onMouseEnter={handleMouseEnter}
        className={` w-full whitespace-nowrap z-10 pr-2 flex ${
          hover ? "hover:bg-black hover:bg-opacity-5" : ""
        }`}
      >
        <div
          className=" px-3 "
          onMouseLeave={handleMouseLeave}
          // onMouseEnter={handleMouseEnter}
        >
          {label}
        </div>
      </div>
      {isOpen && list?.length ? (
        <div
          onMouseEnter={handleMouseEnter}
          className={
            "border-dark-off-white border absolute  bg-light " +
            positionMapper[position].position
          }
          style={{
            boxShadow:
              "0px 42px 17px rgba(36, 33, 26, 0.01), 0px 23px 14px rgba(36, 33, 26, 0.05), 0px 10px 10px rgba(36, 33, 26, 0.09), 0px 3px 6px rgba(36, 33, 26, 0.1), 0px 0px 0px rgba(36, 33, 26, 0.1)",
          }}
        >
          {list.map((e, i) => (
            <CompanyDetailsMenu
              hover={true}
              key={i}
              label={e.label}
              list={e.list}
              position="right"
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
