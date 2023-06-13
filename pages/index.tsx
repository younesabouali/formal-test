import "../app/globals.css"
import Image from "next/image";
import { AppHeader } from "./../app/AppHeader";
import { Greeting } from "./../app/Greeting";
import { Divider } from "./../app/shared/components/Divider";
import { SearchInput } from "./../app/shared/components/SearchInput";
import { Card } from "./../app/shared/components/Card";
import { AppFooter } from "./../app/AppFooter";

export default function homeScreen(props: {}) {
  const cardTitle = (
    <span className="w-full inline-flex justify-between ">
      XXX <Image src={"/info.svg"} alt="info" width={"20"} height={"20"} />
    </span>
  );
  return (
    <main className="bg-main-bg h-screen w-screen p-10 flex-col flex text-black">
      <AppHeader />
      <div className="px-20 h-full overflow-x-hidden overflow-y-auto xs:px-0">
        <Greeting />
        <Divider />
        <div className="py-6">
          <SearchInput placeholder="Ask Me Any Data Question" />
        </div>
        <Divider />
        <div className="flex gap-x-1.5 pt-3 xs:flex-wrap">
          <Card
            label="XXX"
            size="large"
            Icon={() => (
              <Image src="/grid.svg" width={"16"} height="22" alt="Grid" />
            )}
          />
          <Card
            label="XXX"
            size="large"
            Icon={() => (
              <Image src="/grid.svg" width={"16"} height="22" alt="Grid" />
            )}
          />
          <Card
            label="XXX"
            size="large"
            Icon={() => (
              <Image src="/grid.svg" width={"16"} height="22" alt="Grid" />
            )}
          />
          <Card
            label="XXX"
            size="large"
            Icon={() => (
              <Image src="/grid.svg" width={"16"} height="22" alt="Grid" />
            )}
          />
        </div>

        <div className="flex gap-x-1.5   justify-start items-start flex-wrap">
          <Card
            label={cardTitle}
            size="small"
            Icon={() => (
              <Image src="/grid.svg" width={"16"} height="22" alt="Grid" />
            )}
          />
          <Card
            label={cardTitle}
            size="small"
            Icon={() => (
              <Image src="/grid.svg" width={"16"} height="22" alt="Grid" />
            )}
          />
          <Card
            label={cardTitle}
            size="small"
            Icon={() => (
              <Image src="/grid.svg" width={"16"} height="22" alt="Grid" />
            )}
          />
          <Card
            label={cardTitle}
            size="small"
            Icon={() => (
              <Image src="/grid.svg" width={"16"} height="22" alt="Grid" />
            )}
          />
          <Card
            label={cardTitle}
            size="small"
            Icon={() => (
              <Image src="/grid.svg" width={"16"} height="22" alt="Grid" />
            )}
          />
          <Card
            label={cardTitle}
            size="small"
            Icon={() => (
              <Image src="/grid.svg" width={"16"} height="22" alt="Grid" />
            )}
          />
          <Card
            label={cardTitle}
            size="small"
            Icon={() => (
              <Image src="/grid.svg" width={"16"} height="22" alt="Grid" />
            )}
          />
        </div>
      </div>
      <AppFooter />
    </main>
  );
}
