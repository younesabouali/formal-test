import React from "react";

import Image from "next/image";
import { BaseButton } from "./shared/components/BaseButton";

export const AppFooter = (props: {}) => {
  return (
    <div className="flex justify-between">
      <BaseButton
        color="mid-grey"
        Icon={() => (
          <Image src={"/bug.svg"} width={"18"} height="18" alt="Dial" />
        )}
      />
      <BaseButton
        color="black"
        Icon={() => (
          <Image src={"/dial.svg"} width={"18"} height="18" alt="Dial" />
        )}
      />
    </div>
  );
};
