import Image from "next/image";

export default function PageIntroduction({ title, image }) {
  return (
    <div className="relative h-[500px] w-full">
      <Image src={image} fill className="object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-6xl text-center text-white font-semibold uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
}
