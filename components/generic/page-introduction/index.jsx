import Image from "next/image";

export default function PageIntroduction({ title, image }) {
  return (
    <div className="relative h-[240px] sm:h-[280px] md:h-[320px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] w-full">
      <Image src={image} fill className="object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl text-center text-white font-semibold uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
}
