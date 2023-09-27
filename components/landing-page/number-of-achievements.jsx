import { cn } from "@/lib/utils";
import Image from "next/image";

const data = [
  {
    title: "Years of Operation",
    icon: "/icons/years-of-operation.svg",
    amount: "04",
  },
  {
    title: "Completed Projects",
    icon: "/icons/completed-projects.svg",
    amount: "112",
  },
  {
    title: "Loyal Clients",
    icon: "/icons/loyal-clients.svg",
    amount: "57",
  },
  {
    title: "New Projects",
    icon: "/icons/new-projects.svg",
    amount: "04",
  },
];

export default function NumberOfAchievements() {
  return (
    <div className="p-12  lg:p-16 flex flex-col items-center gap-16 relative bg-[url('/our-achievements-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-primary/80"></div>
      <div className="flex flex-col items-center z-10">
        <div>
          <p
            className={cn(
              "landing-page-subheading",
              "!text-white !normal-case"
            )}
          >
            Some Facts
          </p>
          <h2 className={cn("landing-page-heading", "!text-white")}>
            Number of Achievements
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-16 max-w-[1600px] w-full">
        {data.map((item, i) => (
          <div className="w-full h-full flex flex-col items-center justify-center aspect-square relative before:absolute before:block before:content-[' '] before:top-0 before:left-0 before:right-0 before:h-2/5 before:border before:border-b-0 before:border-white after:absolute after:block after:content-[''] after:bottom-0 after:left-0 after:right-0 after:h-2/5 after:border after:border-white after:border-t-0">
            <div className="w-[75px] h-[75px] relative mb-4">
              <Image src={item.icon} fill />
            </div>
            <h3 className="font-bold text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-white">
              {item.amount}
            </h3>
            <p className="text-xl lg:text-2xl 2xl:text-3xl text-white text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
