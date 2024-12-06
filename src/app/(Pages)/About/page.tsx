"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

const page = () => {
  return (
    <div className="px-[5%] py-24 w-full min-h-screen dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
      <div>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src={`/Mummy.jpeg`}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain max-h-[60vh] rounded"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Hair Stylist Cum Dresser
          </p>

          <p className="text-xs  text-justify text-neutral-600 dark:text-neutral-400">
          Experienced and creative Hair Dresser with over 8 years of expertise in the beauty industry, specializing in hairstyling for web series, television productions, and bridal events. Skilled in handling high-pressure environments and collaborating with makeup artists, directors, and clients to deliver stunning results that enhance visual storytelling. Known for precision, attention to detail, and a strong commitment to client satisfaction. Passionate about staying updated with the latest hair trends and techniques to ensure modern and timeless styles for every occasion.
          </p>
        
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default page;
