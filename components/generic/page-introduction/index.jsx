import Image from "next/image";

export default function PageIntroduction({ title, image }) {
  return (
    <div className="relative h-[240px] w-full sm:h-[280px] md:h-[320px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]">
      <Image src={image} fill className="z-0 object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-center text-2xl font-semibold uppercase text-white md:text-4xl lg:text-5xl 2xl:text-6xl">
          {title}
        </h1>
      </div>
    </div>
  );
}
