import React from "react";

import Image from "next/image";
import { BaseButton } from "./shared/components/BaseButton";
const profil = {
  Name: "Mokhtar",
};
export const Greeting = (props: {}) => {
  return (
    <div className="py-6 flex  flex-row justify-between">
      <h1 className="text-4xl font-light"> Good Afternoon, {profil.Name}</h1>
      <BaseButton
        color="danger"
        label="0"
        Icon={() => <Image src={"/bell.svg"} className="sticky w-4 h-5 " alt="Bell" width={"16"} height="20" />}
      />
    </div>
  );
};
