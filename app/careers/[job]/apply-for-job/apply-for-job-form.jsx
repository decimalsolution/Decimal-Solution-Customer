"use client";

import TextInputFormControlled from "@/components/form-controlled/text-input-controlled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import SelectMenuFromControlled from "@/components/form-controlled/select-menu-controlled";
import { useState } from "react";
import { uploadImage } from "@/lib/firebase";

export default function ApplyForJobForm() {
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    name: z.string().nonempty({ message: "Name is required" }),
    email: z.string().email({ message: "Invalid Email" }),
    gender: z.string().nonempty({
      message: "Gender is required",
    }),
    city: z.string().nonempty({
      message: "City is required",
    }),
    cellNumber: z.string().nonempty({
      message: "Cell Number is required",
    }),
    whatsappNumber: z.string().nonempty({
      message: "Whatsapp Number is required",
    }),
    experience: z.string().nonempty({
      message: "Experience is required",
    }),
    resume: z.string().nonempty({
      message: "Resume is required",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      gender: "Male",
      city: "",
      cellNumber: "",
      whatsappNumber: "",
      experience: "0-1",
      resume: "",
    },
  });

  console.log(form.getValues());

  async function onSubmit(values) {
    setLoading(true);

    console.log(values);
    const resume = values.resume;

    console.log(resume);

    const url = await uploadImage(resume, "resume");

    console.log(url);

    // const res = await fetch(
    //   "https://backend.decimalsolution.com/api/v1/web/jobApplications",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(values),
    //   }
    // );

    // const data = await res.json();
    // console.log(data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
        {!loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TextInputFormControlled
              placeholder={"Full Name"}
              control={form.control}
              name={"name"}
            />
            <TextInputFormControlled
              placeholder={"Email"}
              control={form.control}
              name={"email"}
            />

            <SelectMenuFromControlled
              placeholder={"Gender"}
              control={form.control}
              name={"gender"}
              values={["Male", "Female", "Other"]}
            />

            <TextInputFormControlled
              placeholder={"City"}
              control={form.control}
              name={"city"}
            />

            <TextInputFormControlled
              placeholder={"Cell Number"}
              control={form.control}
              name={"cellNumber"}
              mask="+92 999 9999999"
            />

            <TextInputFormControlled
              placeholder={"WhatsApp Number"}
              control={form.control}
              name={"whatsappNumber"}
              mask="+92 999 9999999"
            />

            <SelectMenuFromControlled
              placeholder={"Experience"}
              control={form.control}
              name={"experience"}
              values={[
                {
                  value: "0-1",
                  label: "Less than 1 year of experience",
                },
                {
                  value: "1-3",
                  label: "1-3 years of experience",
                },
                {
                  value: "3-5",
                  label: "3-5 years of experience",
                },
                {
                  value: "5-8",
                  label: "5-8 years of experience",
                },
              ]}
            />

            <TextInputFormControlled
              placeholder={"Resume"}
              control={form.control}
              name={"resume"}
              type="file"
              accept=".pdf"
            />

            <div className="lg:col-span-2">
              <button
                type="submit"
                className="text-sm md:text-base lg:text-lg xl:text-xl bg-primary px-4 md:px-8 lg:px-16 py-2 md:py-3 lg:py-4 text-white rounded-full self-center lg:self-end "
              >
                Apply Now
              </button>
            </div>
          </div>
        ) : (
          <div
            role="status"
            className="absolute  inset-0 flex flex-col items-center justify-center gap-4"
          >
            <svg
              aria-hidden="true"
              className="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="text-xl xl:text-3xl">Sending..</span>
          </div>
        )}
      </form>
    </Form>
  );
}
