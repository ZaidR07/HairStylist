"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9996]"
          onClick={closeImage}
        >
          <div className="relative w-full h-[80vh]">
            <Image
              src={selectedImage}
              className="rounded-lg"
              width={800}
              height={600}
              alt="Expanded View"
            />
            <button
              className="absolute top-3 right-3 bg-white text-black px-3 py-1 rounded-full shadow-lg"
              onClick={(e) => {
                e.stopPropagation(); // Prevent closing when clicking the button
                closeImage();
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div
        className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-6 py-10 px-5"
        ref={gridRef}
      >
        <div className="grid gap-6">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
              onClick={() => handleImageClick(el)}
            >
              <Image
                src={el}
                className="w-full h-[150px] object-cover rounded-lg cursor-pointer"
                width={320}
                height={400} // Adjusted for portrait ratio
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-6">
          {secondPart.map((el, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              key={"grid-2" + idx}
              onClick={() => handleImageClick(el)}
            >
              <Image
                src={el}
                className="w-full h-[150px] object-cover rounded-lg cursor-pointer"
                width={320}
                height={400} // Adjusted for portrait ratio
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-6">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={"grid-3" + idx}
              onClick={() => handleImageClick(el)}
            >
              <Image
                src={el}
                className="w-full h-[150px] object-cover rounded-lg cursor-pointer"
                width={320}
                height={400} // Adjusted for portrait ratio
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
