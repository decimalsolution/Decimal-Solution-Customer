import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ToolsAndTechnologies() {
  const data = [
    "/Tools And Technologies/react.png",
    "/Tools And Technologies/nextjs.png",
    "/Tools And Technologies/vuejs.png",
    "/Tools And Technologies/angular.png",
    "/Tools And Technologies/nodejs.png",
    "/Tools And Technologies/csharp.png",
    "/Tools And Technologies/java.png",
    "/Tools And Technologies/python.png",
    "/Tools And Technologies/django.png",
    "/Tools And Technologies/express.png",
    "/Tools And Technologies/mongodb.png",
    "/Tools And Technologies/mysql.png",
    "/Tools And Technologies/planetscale.png",
    "/Tools And Technologies/postgre.png",
    "/Tools And Technologies/material.png",
    "/Tools And Technologies/mantine.png",
    "/Tools And Technologies/figma.png",
    "/Tools And Technologies/illustrator.png",
    "/Tools And Technologies/photoshop.png",
    "/Tools And Technologies/blender.png",
    "/Tools And Technologies/unity.png",
    "/Tools And Technologies/godot.png",
    "/Tools And Technologies/cypress.png",
    "/Tools And Technologies/mocha.png",
  ];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-16 py-24">
      <div className="block grid-cols-3 px-4 lg:grid 2xl:px-24">
        <div className="col-span-2 col-start-2">
          <p className={cn("landing-page-subheading", "!normal-case")}>
            Tools and Technologies
          </p>
          <h2 className="landing-page-heading">Working Technologies</h2>
          <p className="landing-page-paragraph max-w-[1000px]">
            We ensure that you will embark on a journey of success with us by
            using the latest technologies.
          </p>
        </div>
      </div>

      <div className="relative h-full w-full overflow-hidden before:absolute before:left-0 before:z-10 before:block before:h-full before:w-40 before:bg-gradient-to-r before:from-white before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:block after:h-full after:w-40 after:bg-gradient-to-l after:from-white after:to-transparent after:content-['']">
        <div
          className={`flex h-32 w-[calc(372px*48)] animate-our-technologies gap-32`}
        >
          {data.map((item, index) => (
            <div
              key={"tools-and-technologies-" + index + "-key"}
              className="relative h-full w-[372px]"
            >
              <Image
                src={item}
                alt="Tools and Technologies"
                fill
                className="object-contain"
                loading={"lazy"}
              />
            </div>
          ))}
          {data.map((item, index) => (
            <div
              key={"tools-and-technologies-" + index + "-key-duplicate"}
              className="relative h-full w-[372px]"
            >
              <Image
                src={item}
                alt="Tools and Technologies"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
