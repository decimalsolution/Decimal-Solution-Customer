"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const buttons = [
  "All",
  "Web Development",
  "Mobile App Development",
  "Graphics Designing",
  "Digital Marketing",
  "ERP & Business Solutions",
  "AR/VR",
];

export default function OurProjects() {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-col items-center justify-center gap-8 flex-wrap ">
      <div className="flex flex-col items-center">
        <div>
          <p className="text-2xl text-primary before:content-['<'] before:inline-block before:mr-1  after:content-['>'] after:inline-block after:ml-1">
            Our Projects
          </p>
          <h2 className="text-4xl font-semibold">
            Some Latest Client Projects
          </h2>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {buttons.map((buttonText) => (
          <button
            className={cn(
              "text-xl px-4 py-2 border rounded-lg hover:bg-primary hover:text-white transition-all duration-200",
              selected === buttonText && "bg-primary text-white"
            )}
            onClick={() => {
              setSelected(buttonText);
            }}
          >
            {buttonText}
          </button>
        ))}
      </div>
    </div>
  );
}
