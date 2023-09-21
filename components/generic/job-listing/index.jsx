export default function JobListing({ title, type, seats }) {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-gray-500/50 rounded-[30px] p-12 gap-8 aspect-[1.3]">
      <h3 className="text-4xl font-semibold text-black">{title}</h3>
      <p className="text-2xl">Type: {type}</p>
      <p className="text-2xl">Seats: 0{seats}</p>
      <button className="text-xl rounded-3xl border border-primary text-primary px-10 py-2 hover:bg-primary hover:text-white transition-all duration-300">
        Read More
      </button>
    </div>
  );
}
