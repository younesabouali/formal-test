import Image from "next/image";
import React from "react";
import { Divider } from "./shared/components/Divider";
interface AppHeaderProps{
  border?:boolean
}
export const AppHeader = (props: AppHeaderProps) => {
  const {border} = props
  return (
    <div className="flex flex-row justify-between">
      <Image src={"/logo.svg"} alt="Logo"width={"48"} height={34.17}/>
      {
        border ? 
      <div className="w-full h-[inherit] flex flex-col justify-between px-7">
        <Divider/>
        <Divider/>
      </div>:null

      }
      <Image src={"/avatar.png"} alt="Avatar"width={"48"} height={"48"}/>
    </div>
  );
};
