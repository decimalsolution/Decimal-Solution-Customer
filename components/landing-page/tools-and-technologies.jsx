import Image from "next/image";

export default function ToolsAndTechnologies() {
  const data = [
    "/Tools And Technologies/mongodb.png",
    "/Tools And Technologies/express.png",
    "/Tools And Technologies/react.png",
    "/Tools And Technologies/nodejs.png",
    "/Tools And Technologies/nextjs.png",
    "/Tools And Technologies/angular.png",
    "/Tools And Technologies/vuejs.png",
    "/Tools And Technologies/django.png",
    "/Tools And Technologies/python.png",
    "/Tools And Technologies/java.png",
    "/Tools And Technologies/material.png",
    "/Tools And Technologies/mantine.png",
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-16 py-24">
      <div>
        <p className="text-2xl text-primary before:content-['<'] before:inline-block before:mr-1  after:content-['>'] after:inline-block after:ml-1">
          Tools and Technologies
        </p>
        <h2 className="text-4xl font-semibold">Working Technologies</h2>
        <p className="text-2xl text-gray-700">
          We ensure that you will embark on a journey of success with us by
          using the latest technologies.
        </p>
      </div>

      <div class="w-full h-full overflow-hidden relative before:content-[''] before:absolute before:left-0 before:block before:h-full before:w-40 before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:content-[''] after:absolute after:top-0 after:right-0 after:block after:h-full after:w-40 after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
        <div className="flex h-32 gap-32 w-[calc(372px*24)] animate-our-technologies">
          {data.map((item, index) => (
            <div key={index} className="h-full w-[372px] relative">
              <Image
                src={item}
                alt="Tools and Technologies"
                fill
                className="object-contain"
              />
            </div>
          ))}
          {data.map((item, index) => (
            <div key={index} className="h-full w-[372px] relative">
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
