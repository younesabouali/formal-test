import "../app/globals.css";
import Image from "next/image";
import { AppHeader } from "./../app/AppHeader";
import { AppFooter } from "./../app/AppFooter";
import { BaseButton } from "@/app/shared/components/BaseButton";
import CompanyDetails from "../app/CompanyDetails";
import { Badge } from "@/app/shared/components/Badge";

export default function InvestementStats(props: {}) {
  return (
    <main className="bg-main-bg h-screen w-screen p-10 flex-col flex text-black">
      <AppHeader border={true} />
      <div className="flex pt-5 h-full">
        <div className="pt-3.5 xs:hidden">
          <BaseButton
            Icon={() => (
              <Image
                src={"/search.svg"}
                width={"20"}
                height={"20"}
                alt="Search"
              />
            )}
            color="light"
          />
        </div>
        <div className="px-6 w-full  h-full overflow-x-hidden overflow-y-auto xs:px-0 ">
          <div className="flex justify-between w-full flex-wrap">
            <div className="flex items-end flex-wrap xs:w-full">
              <div className="flex items-center gap-3.5 xs:basis-full xs:justify-between">
                <Image
                  src={"/logo.svg"}
                  width={"38"}
                  height={"37"}
                  alt="Formal"
                />
                <h2 className="text-xl font-bold w-[116px] ">Formal</h2>
                <div className="pt-3.5 xs:block hidden self-end">
                  <BaseButton
                    Icon={() => (
                      <Image
                        src={"/search.svg"}
                        width={"20"}
                        height={"20"}
                        alt="Search"
                      />
                    )}
                    color="light"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <Badge size="medium" color="thrive-dark-blue" label="Private" />
                <Badge
                  size="medium"
                  color="dark-off-white"
                  label="Mokhtar Bacha"
                />
              </div>
            </div>
            <div className="flex items-center gap-4 xs:pt-3 lg:pt-0 sm:pt-3">
              <span className="text-thrive-dark-blue  ">www.joinformal.com</span>
              <Image
                src={"/instagram.svg"}
                alt="Instagram"
                width={"18"}
                height={"18"}
              />
              <Image
                src={"/linkedin.svg"}
                alt="Linkedin"
                width={"18"}
                height={"18"}
              />
              <Image
                src={"/twitter.svg"}
                alt="Twitter"
                width={"18"}
                height={"18"}
              />
            </div>
          </div>
          <CompanyDetails />
        </div>
      </div>
      <AppFooter />
    </main>
  );
}
