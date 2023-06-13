import "../app/globals.css";
import Image from "next/image";
import { AppHeader } from "./../app/AppHeader";
import { AppFooter } from "./../app/AppFooter";
import { BaseButton } from "@/app/shared/components/BaseButton";
import { BaseSelect } from "@/app/shared/components/forms/BaseSelect";
import { SearchInput } from "@/app/shared/components/SearchInput";
import { ResearchCard } from "@/app/ResearchCard";
import { Tabs } from "@/app/shared/components/Tabs";

export default function Industries(props: {}) {
  const cardTitle = (
    <span className="w-full inline-flex justify-between ">
      XXX <Image src={"/info.svg"} alt="info" width={"20"} height={"20"} />
    </span>
  );
  return (
    <main className="bg-main-bg h-screen w-screen p-10 flex-col flex text-black">
      <AppHeader />

      <div className="px-20 h-full overflow-x-hidden overflow-y-auto xs:px-0 sm:px-0 md:px-0">
        <div className="flex items-center gap-3 pt-5  xs:flex-wrap">
          <h1 className="w-full text-2xl font-normal">Research & Insights</h1>
          <BaseSelect />
          <BaseButton
            Icon={() => (
              <Image src={"/link.svg"} width={"22"} height="10" alt="Link" />
            )}
            color="base"
            label=""
          />
          <BaseButton
            Icon={() => (
              <Image
                src={"/filter.svg"}
                width={"22"}
                height="20"
                alt="Filter"
              />
            )}
            color="base"
            label="0"
          />
        </div>
        <div className="w-full pt-3">
          <Tabs
            tabs={[
              {
                label: "Research Themes",
                Icon: () => (
                  <Image
                    src={"/research.svg"}
                    width={"20"}
                    height={"18"}
                    alt="Research"
                  />
                ),
              },

              {
                label: "Trackers",
                Icon: () => (
                  <Image
                    src={"/trackers.svg"}
                    width={"19"}
                    height={"18"}
                    alt="Trackers"
                  />
                ),
              },
            ]}
            selected="Research Themes"
          />
        </div>
        <div className="flex w-full gap-3 pt-3">
          <SearchInput placeholder="Search" />
          <BaseButton
            color="thrive-green"
            Icon={() => (
              <Image
                src={"/upload.svg"}
                width={"15"}
                height={"15"}
                alt="Upload"
              />
            )}
          />
        </div>
        <div className="flex gap-5 pt-6 w-full  flex-wrap justify-between ">
          <ResearchCard
            description="This is an example of what a description could look like for a linkeddocument."
            lastUpdate="Oct 28, 2022"
            title="Drugs 2.0"
            status="Existing Resident"
            deadLeads={["Cat"]}
            ResFounder={"Matt K"}
            totalDocuments="12"
          />
          <ResearchCard
            description="This is an example of what a description could look like for a linkeddocument."
            lastUpdate="Oct 28, 2022"
            title="Drugs 2.0"
            status="Existing Resident"
            deadLeads={["Cat"]}
            ResFounder={"Matt K"}
            totalDocuments="12"
          />

          <ResearchCard
            description="This is an example of what a description could look like for a linkeddocument."
            lastUpdate="Oct 28, 2022"
            title="Drugs 2.0"
            status="Existing Resident"
            deadLeads={["Cat"]}
            ResFounder={"Matt K"}
            totalDocuments="12"
          />

          <ResearchCard
            description="This is an example of what a description could look like for a linkeddocument."
            lastUpdate="Oct 28, 2022"
            title="Drugs 2.0"
            status="Existing Resident"
            deadLeads={["Cat"]}
            ResFounder={"Matt K"}
            totalDocuments="12"
          />
        </div>
      </div>
      <AppFooter hideBug={true} />
    </main>
  );
}
