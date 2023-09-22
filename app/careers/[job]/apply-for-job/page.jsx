import CustomInput from "@/components/generic/custom-input";

export default function SpecificJob({ params }) {
  return (
    <div>
      <div className="flex flex-col items-stretch px-8 sm:px-12 md:px-20 lg:px-28 xl:px-32 2xl:px-36 py-24 gap-2 md:gap-4 lg:gap-8">
        <h2 className="landing-page-heading">Apply Online</h2>
        <p className="landing-page-paragraph">Please Fill the form to apply.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CustomInput placeholder={"Full Name"} />
          <CustomInput placeholder={"Email"} />
          <CustomInput placeholder={"Date of Birth"} />
          <CustomInput placeholder={"Gender"} />
          <CustomInput placeholder={"Address"} />
          <CustomInput placeholder={"Interested In"} />

          <CustomInput
            placeholder={"Interested In"}
            type="file"
            className={"lg:col-span-2"}
          />
        </div>
        <button className="text-sm md:text-base lg:text-lg xl:text-xl bg-primary px-4 md:px-8 lg:px-16 py-2 md:py-3 lg:py-4 text-white rounded-full self-center lg:self-end ">
          Apply Now
        </button>
      </div>
    </div>
  );
}
