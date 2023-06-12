import React from "react";
import Image from "next/image";

interface SearchInputProps {
  placeholder?: string;
}
export const SearchInput = (props: SearchInputProps) => {
  const { placeholder } = props;
  return (
    <div className="relative flex items-center">
      <input placeholder={placeholder} className="outline-none border-1 rounded-sm relative bg-white border-grey-border border w-full h-12 px-6 py-3.5" />
      <Image src={"search.svg"} className="absolute right-3.5" alt="search" width={"20"} height={"20"}/>
    </div>
  );
};
