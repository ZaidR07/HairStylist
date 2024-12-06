"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
const Work = () => {
  return (
    <>
      <h2 className="max-w-7xl  mx-auto text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Work <span className="text-yellow-700">Gallery</span>
      </h2>
      <ParallaxScroll images={images} />
    </>
  );
}


const images = [
  "/Gallery1.jpeg",
  "/Gallery2.jpeg",
  "/Gallery4.jpeg",
  "/Gallery5.jpeg",
  "/Gallery3.jpeg",
  "/Gallery6.jpeg",
  "/Gallery7.jpeg",
];

export default Work
