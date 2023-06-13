import Image from "next/image";
import React from "react";
import Link from 'next/link'

import { Divider } from "./shared/components/Divider";
interface AppHeaderProps{
  border?:boolean
}
export const AppHeader = (props: AppHeaderProps) => {
  const {border} = props
  return (
    <div className="flex flex-row justify-between">
      <Image src={"/logo.svg"} alt="Logo"width={"48"} height={34.17}/>
      <div className="w-full h-[inherit] flex flex-col justify-between px-7">
      {
        border ? 
        <Divider/>
 
        :null
  
        }
        <div className="flex justify-between w-full">

        <Link href="/" className="text-thrive-dark-blue underline">Home screen</Link>
        <Link href="/industries" className="text-thrive-dark-blue underline">Industries</Link>
        <Link href="/investement-stats"  className="text-thrive-dark-blue underline">Investement Stats</Link>
        </div>
        {
        border ? 
        <Divider/>
 
        :null
  
        }
        
      </div>
      <Image src={"/avatar.png"} alt="Avatar"width={"48"} height={"48"}/>
    </div>
  );
};
