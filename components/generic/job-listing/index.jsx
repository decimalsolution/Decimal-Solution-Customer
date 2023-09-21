export default function JobListing({ title, type, seats }) {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-gray-500/50 rounded-[30px] p-12 gap-8 aspect-[1.3]">
      <h3 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-black">
        {title}
      </h3>
      <p className="text-sm md:text-base lg:text-xl 2xl:text-2xl text-center">
        Type: {type}
      </p>
      <p className="text-sm md:text-base lg:text-xl 2xl:text-2xl text-center">
        Seats: 0{seats}
      </p>
      <button className="text-sm md:text-base lg:text-lg xl:text-xl rounded-3xl border border-primary text-primary px-4 md:px-6 lg:px-8 xl:px-10 py-2 hover:bg-primary hover:text-white transition-all duration-300">
        Read More
      </button>
    </div>
  );
}
