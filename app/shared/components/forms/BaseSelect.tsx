import React from "react";

import Image from "next/image";

export const BaseSelect = (props: {}) => {
  return (
    <div className="relative w-full flex items-center">
      <select
        value={"Healthcare"}
        className="w-full h-12 bg-white rouned-sm border border-1 border-grey-border py-3 px-6 appearance-none  outline-none"
      >
        <option value="Healthcare" label="Healthcare" />
      </select>
      <Image src={"./chevron-down.svg"} alt="Chevron" width="12" height={"7"} className="absolute right-5" />
    </div>
  );
};
