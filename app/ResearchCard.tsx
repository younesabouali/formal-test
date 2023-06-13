import React from "react";
import { Divider } from "./shared/components/Divider";
import { Badge } from "./shared/components/Badge";
interface ResearchCardProps {
  title: string;
  description: string;
  totalDocuments: string;
  lastUpdate: string;
  status: string;
  deadLeads: string[];
  ResFounder: string;
}
export const ResearchCard = (props: ResearchCardProps) => {
  const {
    totalDocuments,
    lastUpdate,
    ResFounder,
    deadLeads,
    status,
    title,
    description,
  } = props;
  return (
    <div className="bg-white p-3 w-[303px] ">
      <h2 className="text-lg font-normal pb-1"> {title}</h2>
      <p className="text-xxs leading-none text-dark-grey py-3">{description}</p>
      <Divider />
      <div className="flex w-full justify-between pt-3">
        <span className="text-grey-text text-sm">Total Documents</span>
        <span className="text-sm">{totalDocuments}</span>
      </div>

      <div className="flex w-full justify-between pt-3">
        <span className="text-grey-text text-sm">Last Update</span>
        <span className="text-sm">{lastUpdate}</span>
      </div>

      <div className="flex w-full justify-between pt-3">
        <span className="text-grey-text text-sm">Status</span>
        <Badge color="light-pink" label={status} />
      </div>

      <div className="flex w-full justify-between pt-3">
        <span className="text-grey-text text-sm">Deal leads</span>
        {deadLeads.map((e, index) => (
          <Badge label={e} key={index} color="light-grey" />
        ))}
      </div>

      <div className="flex w-full justify-between pt-3">
        <span className="text-grey-text text-sm">Res/Founder</span>
        <Badge color="light-pink" label={ResFounder} />
      </div>
    </div>
  );
};
