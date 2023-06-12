import Image from "next/image";
import { AppHeader } from "./AppHeader";
import { Greeting } from "./Greeting";
import { Divider } from "./shared/components/Divider";
import { SearchInput } from "./shared/components/SearchInput";
import { Card } from "./shared/components/Card";
import { AppFooter } from "./AppFooter";

export default function Home() {
  const cardTitle = (
    <span className="w-full inline-flex justify-between ">
      XXX <Image src={"/info.svg"} alt="info" width={"20"} height={"20"} />
    </span>
  );
  return (
    <main className="bg-main-bg h-screen w-screen p-10 flex-col flex">
      <AppHeader />
      <div className="px-20 h-full">
        <Greeting />
        <Divider />
        <div className="py-6">
          <SearchInput placeholder="Ask Me Any Data Question" />
        </div>
        <Divider />
        <div className="flex gap-x-1.5 pt-6">
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

        <div className="flex gap-x-1.5 pt-3">
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
