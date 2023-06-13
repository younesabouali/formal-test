import React from "react";
import Image from "next/image";
import { Divider } from "./shared/components/Divider";
import { RowDescription } from "./shared/components/RowDescription";
import { CompanyDetailsMenu } from "./CompanyDetailsMenu";
const MenuList = [
  {
    label: (
      <div className="flex gap-x-3 px-3 h-12 items-center ">
        <Image src="/general-info.svg" width={"20"} height={"20"} alt="Info" />{" "}
        <span className="px-0.5 text-sm">General Info </span>
      </div>
    ),
    list: [
      {
        label: (
          <div className="flex gap-x-3 h-12 items-center ">
            <Image
              src="/general-info.svg"
              width={"20"}
              height={"20"}
              alt="Info"
            />
            <span className="px-0.5 text-sm">Company Documents </span>
          </div>
        ),
      },
      {
        label: (
          <div className="flex gap-x-3 h-12 items-center ">
            <Image
              src="/general-info.svg"
              width={"20"}
              height={"20"}
              alt="Info"
            />
            <span className="px-0.5 text-sm">Company Documents </span>
          </div>
        ),
      },
      {
        label: (
          <div className="flex gap-x-3 h-12 items-center ">
            <Image
              src="/general-info.svg"
              width={"20"}
              height={"20"}
              alt="Info"
            />
            <span className="px-0.5 text-sm">Company Documents </span>
          </div>
        ),
      },
      {
        label: (
          <div className="flex gap-x-3 h-12 items-center ">
            <Image
              src="/general-info.svg"
              width={"20"}
              height={"20"}
              alt="Info"
            />
            <span className="px-0.5 text-sm">Company Documents </span>
          </div>
        ),
      },
    ],
  },

  {
    label: (
      <div className="flex gap-x-3 px-3 h-12 items-center  ">
        <Image src="/general-info.svg" width={"20"} height={"20"} alt="Info" />{" "}
        <span className="px-0.5 text-sm">Company Documents </span>
      </div>
    ),
    list: [
      {
        label: (
          <div className="flex gap-x-3 h-12 items-center ">
            <Image
              src="/general-info.svg"
              width={"20"}
              height={"20"}
              alt="Info"
            />
            <span className="px-0.5 text-sm">Company Documents </span>
          </div>
        ),
      },
      {
        label: (
          <div className="flex gap-x-3 h-12 items-center ">
            <Image
              src="/general-info.svg"
              width={"20"}
              height={"20"}
              alt="Info"
            />
            <span className="px-0.5 text-sm">Company Documents </span>
          </div>
        ),
      },
      {
        label: (
          <div className="flex gap-x-3 h-12 items-center ">
            <Image
              src="/general-info.svg"
              width={"20"}
              height={"20"}
              alt="Info"
            />
            <span className="px-0.5 text-sm">Company Documents </span>
          </div>
        ),
      },
      {
        label: (
          <div className="flex gap-x-3 h-12 items-center ">
            <Image
              src="/general-info.svg"
              width={"20"}
              height={"20"}
              alt="Info"
            />
            <span className="px-0.5 text-sm">Company Documents </span>
          </div>
        ),
      },
    ],
  },

  {
    label: (
      <div className="flex gap-x-3 px-3 h-12 items-center ">
        <Image src="/general-info.svg" width={"20"} height={"20"} alt="Info" />{" "}
        <span className="px-0.5 text-sm">General Info </span>
      </div>
    ),
  },

  {
    label: (
      <div className="flex gap-x-3 px-3 h-12 items-center ">
        <Image src="/general-info.svg" width={"20"} height={"20"} alt="Info" />{" "}
        <span className="px-0.5 text-sm">General Info </span>
      </div>
    ),
  },

  {
    label: (
      <div className="flex gap-x-3 px-3 h-12 items-center ">
        <Image src="/general-info.svg" width={"20"} height={"20"} alt="Info" />{" "}
        <span className="px-0.5 text-sm">General Info </span>
      </div>
    ),
  },
  {
    label: (
      <div className="flex gap-x-3 px-3 h-12 items-center ">
        <Image src="/general-info.svg" width={"20"} height={"20"} alt="Info" />{" "}
        <span className="px-0.5 text-sm">General Info </span>
      </div>
    ),
  },
];
export default function CompanyDetails() {
  return (
    <div className="bg-light border-mid-grey border p-3 mt-3">
      <div className="flex w-full justify-between mb-3">
        <CompanyDetailsMenu
          label={<h3>Company Details</h3>}
          list={MenuList}
          position="bottom"
        />
        <Image
          src={"/chevron-down.svg"}
          width={"12"}
          height={"7"}
          className="rotate-180"
          alt="Down"
        />
      </div>
      <Divider />
      <div className="flex  flex-wrap w-full pt-1.5">
        <div className="px-3 xs:px-0 flex flex-col items-center justify-end h-[inherit] xs:w-full  md:w-full xs:h-32 xs:pb-3 md:px-0 lg:w-full lg:px-3 xl:w-1/3 sm:w-full sm:px-0">
          <div className="h-[30px] w-full bg-main-bg border-mid-grey border"></div>
        </div>

        <div className="flex flex-col items-center justify-end h-[inherit] xs:w-full md:w-full gap-3 lg:w-full lg:px-3 xl:w-1/3 sm:w-full sm:px-0">
          
          <RowDescription name={"CEO"} value={"Mokhtar Bacha"} />

          <RowDescription name={"Total Raised"} value={"xxx"} />
          <RowDescription name={"Last Valuation (Post)"} value={"$xxx"} />
          <RowDescription name={"Employees"} value={""} />
          <RowDescription name={"Year Founded"} value={"2021"} />
          <RowDescription name={"HQ Location"} value={"New York City, NY"} />
          <RowDescription name={"Sector"} value={"Entreprise Software"} />
          <RowDescription name={"Subsector"} value={"Data"} />
          <RowDescription name={"Industry"} value={"Technology"} />

        </div>

        <div className="px-3 xs:px-0 flex flex-col items-center justify-end h-[inherit] xs:w-full md:w-full md:px-0 gap-3 sm:w-full lg:w-full lg:px-3 xl:w-1/3 sm:px-0">
          <div className="bg-black bg-opacity-5 border-grey-border border py-1.5 px-1.5 flex  justify-between items-center xs:flex-wrap w-full  ">
            <p className="text-mid-grey text-base leading-none pl-3 py-1.5 w-1/2 xs:w-full">
              Main Fund
            </p>
            <div className="bg-light w-1/2 py-1.5 px-3 border border-mid-grey xs:w-full">
              <p>Scout Fund</p>
            </div>
          </div>
          <RowDescription name={"Capital invested"} value={"$X,XXX,XXX"} />
          <RowDescription name={"Funds with exposure"} value={"12"} />
          <RowDescription
            name={"Date of first investement"}
            value={"XXX XX,XXXX"}
          />
          <RowDescription name={"Current MOIC"} value={"XXXXX"} />
          <RowDescription name={"Current IRR"} value={"XXXXX"} />
          <RowDescription name={"Current valuation"} value={"xxxxxx"} />
          <RowDescription name={"Weighted basis"} value={"xxx%"} />
        </div>
      </div>
    </div>
  );
}
