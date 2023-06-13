import React from "react";

import Image from "next/image";
import { BaseButton } from "./shared/components/BaseButton";
interface AppFooterProps {
  hideBug?: boolean;
}
export const AppFooter = (props: AppFooterProps) => {
  const { hideBug } = props;
  return (
    <div className="flex justify-between pt-3">
      <div className="flex-basis-full">
      {!hideBug ? (
        <BaseButton
          color="mid-grey"
          Icon={() => (
            <Image src={"/bug.svg"} width={"18"} height="18" alt="Dial" />
          )}
        />
      ) : null}

      </div>
      <div className="flex-basis-full">
      <BaseButton
        color="black"
        Icon={() => (
          <Image src={"/dial.svg"} width={"18"} height="18" alt="Dial" />
        )}
      />
      </div>
    </div>
  );
};
