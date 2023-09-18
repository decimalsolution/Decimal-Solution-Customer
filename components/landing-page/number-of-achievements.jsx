import Image from "next/image";

export default function NumberOfAchievements() {
  return (
    <div className="p-16 flex flex-col items-center gap-16 relative bg-[url('/our-achievements-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-primary/80"></div>
      <div className="flex flex-col items-center z-10">
        <div>
          <p className="text-2xl text-white before:content-['<'] before:inline-block before:mr-1  after:content-['>'] after:inline-block after:ml-1">
            Our Facts
          </p>
          <h2 className="text-4xl text-white font-semibold">
            Number of Achievements
          </h2>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 max-w-[1600px] w-full">
        <div className="w-full h-full border flex flex-col items-center justify-center border-white aspect-square relative before:absolute before:content-[''] before:top-[calc((50%+25%)/2)] before:-left-1 before:bg-primary before:w-2 before:h-[25%] after:absolute after:content-[''] after:top-[calc((50%+25%)/2)] after:-right-1 after:bg-primary after:w-2 after:h-[25%]">
          <Image
            src="/icons/years-of-operation.svg"
            width={75}
            height={75}
            className="mb-4"
          />
          <h3 className="font-bold text-7xl text-white">04</h3>
          <p className="text-3xl text-white">Years of Operation</p>
        </div>
        <div className="w-full h-full  flex flex-col items-center justify-center border border-white aspect-square relative before:absolute before:content-[''] before:top-[calc((50%+25%)/2)] before:-left-1 before:bg-primary before:w-2 before:h-[25%] after:absolute after:content-[''] after:top-[calc((50%+25%)/2)] after:-right-1 after:bg-primary after:w-2 after:h-[25%]">
          <Image
            src="/icons/completed-projects.svg"
            width={75}
            height={75}
            className="mb-4"
          />
          <h3 className="font-bold text-7xl text-white">112</h3>
          <p className="text-3xl text-white">Completed Projects</p>
        </div>
        <div className="w-full h-full  flex flex-col items-center justify-center border border-white aspect-square relative before:absolute before:content-[''] before:top-[calc((50%+25%)/2)] before:-left-1 before:bg-primary before:w-2 before:h-[25%] after:absolute after:content-[''] after:top-[calc((50%+25%)/2)] after:-right-1 after:bg-primary after:w-2 after:h-[25%]">
          <Image
            src="/icons/loyal-clients.svg"
            width={75}
            height={75}
            className="mb-4"
          />
          <h3 className="font-bold text-7xl text-white">57</h3>
          <p className="text-3xl text-white">Loyal Clients</p>
        </div>
        <div className="w-full h-full  flex flex-col items-center justify-center border border-white aspect-square relative before:absolute before:content-[''] before:top-[calc((50%+25%)/2)] before:-left-1 before:bg-primary before:w-2 before:h-[25%] after:absolute after:content-[''] after:top-[calc((50%+25%)/2)] after:-right-1 after:bg-primary after:w-2 after:h-[25%]">
          <Image
            src="/icons/new-projects.svg"
            width={75}
            height={75}
            className="mb-4"
          />
          <h3 className="font-bold text-7xl text-white">04</h3>
          <p className="text-3xl text-white">New Projects</p>
        </div>
      </div>
    </div>
  );
}
