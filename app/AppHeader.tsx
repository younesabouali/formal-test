import Image from "next/image";
import React from "react";

export const AppHeader = (props: {}) => {
  return (
    <div className="flex flex-row justify-between">
      <Image src={"/logo.svg"} alt="Logo"width={"48"} height={34.17}/>
      <Image src={"/avatar.png"} alt="Avatar"width={"48"} height={"48"}/>
    </div>
  );
};
