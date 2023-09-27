"use client";

import TextInputFormControlled from "@/components/form-controlled/text-input-controlled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import SelectMenuFromControlled from "@/components/form-controlled/select-menu-controlled";
import { useState } from "react";
import { uploadImage } from "@/lib/firebase";
import DropZone from "@/components/generic/dropzone";
import TextAreaFormControlled from "@/components/form-controlled/text-area-controlled";
import Link from "next/link";
import { Check, XCircle } from "lucide-react";

export default function ApplyForJobForm({ job }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

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
    comments: z.string().optional(),
    resume: z.any().refine(
      (file) => {
        if (file == null) {
          return false;
        }
        if (file.type !== "application/pdf") {
          return false;
        }
        return true;
      },
      {
        message: "Invalid Resume. Only PDF files are allowed",
      }
    ),
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
      resume: null,
      comments: "",
      applyingFor: job.title,
    },
  });

  async function onSubmit(values) {
    try {
      setLoading(true);

      const resume = values.resume;

      const url = await uploadImage(resume, "resume");

      const submissionData = {
        fullName: values.name,
        email: values.email,
        gender: values.gender,
        address: values.city,
        contactNumber: values.cellNumber,
        whatsappNumber: values.whatsappNumber,
        yearsOfExperience: values.experience,
        job: job._id,
        resume: url,
        applicantComments: values.comments,
      };

      const res = await fetch(
        "https://backend.decimalsolution.com/api/v1/web/jobApplications",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        }
      );

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
      }
    } catch (e) {
      console.log(e);
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 my-16">
        <div className="flex items-center gap-4">
          <XCircle className=" w-6 md:w-8 lg:w-12 h-full text-primary" />
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold">
            Error Occured
          </p>
        </div>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl text-center">
          Please try again later. Sorry for the inconvenience caused.
        </p>

        <Link
          href={"/careers/${job._id}/apply-for-job"}
          className="text-sm md:text-base lg:text-lg xl:text-xl bg-primary px-4 md:px-8 lg:px-16 py-2 md:py-3 lg:py-4 text-white rounded-full"
        >
          Retry Now
        </Link>
      </div>
    );
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 my-16">
        <div className="flex items-center gap-4">
          <Check className=" w-6 md:w-8 lg:w-12 h-full text-primary" />
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold">
            Application Submitted
          </p>
        </div>
        <Link
          href="/"
          className="text-sm md:text-base lg:text-lg xl:text-xl bg-primary px-4 md:px-8 lg:px-16 py-2 md:py-3 lg:py-4 text-white rounded-full"
        >
          Go Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="landing-page-heading">
        Apply Online for {job.title} at {job.location}
      </h2>
      <p className="landing-page-paragraph">Please Fill the form to apply.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
          {!loading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <TextInputFormControlled
                placeholder={"Full Name"}
                control={form.control}
                name={"name"}
                className={"lg:col-span-2"}
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
                mask="+\92 999 9999999"
              />

              <TextInputFormControlled
                placeholder={"WhatsApp Number"}
                control={form.control}
                name={"whatsappNumber"}
                mask="+\92 999 9999999"
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

              <TextAreaFormControlled
                placeholder={"Comments"}
                control={form.control}
                name={"comments"}
                className={"lg:col-span-2 h-48"}
              />

              <DropZone
                getValues={form.getValues}
                name={"resume"}
                setValue={form.setValue}
                onChange={(file) => {
                  form.setValue("resume", file);
                }}
                className={"lg:col-span-2 h-[300px]"}
                error={form.formState.errors.resume}
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
    </>
  );
}
