"use client";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// const words = `Professional HairStylist`;
// import { heroPic } from "../../../../public/media";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className=" pt-36">
        <p className="m-0 text-3xl sm:text-7xl font-serif relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          <span className="text-yellow-700 ">H</span>i, I&nbsp;am Perween
        </p>
        <span className=" text-3xl sm:text-7xl font-serif relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
          Professional HairStylist
        </span>
        <button
  className="w-24 h-8 mt-4 bg-yellow-800 text-white rounded"
  onClick={() =>
    window.open(
      "https://wa.me/917903670661?text=Hello, I found your contact on the website and would like to hire you. Please get back to me to discuss further details.",
      "_blank",
      "noopener,noreferrer"
    )
  }
  
>
  Hire Me
</button>

      </div>
      {/* <TextGenerateEffect words={words} /> */}
      <Image
        src="/hero_pic.png" // Path to the image in the public folder
        alt="Professional Hair Stylist"
        width={400} // Provide a width for optimization
        height={400} // Provide a height for optimization
        className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
        priority // Ensures this image is loaded with high priority
      />
    </>
  );
}
