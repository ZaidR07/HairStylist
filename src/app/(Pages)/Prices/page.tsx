import React from "react";
import Image from "next/image";

const work = [
  {
    name: "Bridal",
    charge: 2500,
    sno: 1,
  },
  {
    name: "Sidal",
    charge: 1500,
    sno: 2,
  },
  {
    name: "Television Company",
    charge: 70000,
    sno: 3,
  },
  {
    name: "One day Shooting",
    charge: 1200,
    sno: 4,
  },
  {
    name: "Web Series Shooting",
    charge: 1500,
    sno: 5,
  },
  {
    name: "Outdoor",
    charge: 2000,
    sno: 5,
  },
];

const page = () => {
  return (
    <div className="px-[5%] py-12 w-full min-h-screen dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] flex flex-col">
      <h1 className="text-center , text-yellow-600 , text-2xl">
        Service & Charges
      </h1>

      <Image
        src="/workimage.jpg" // Path to the image in the public folder
        alt="Professional Hair Stylist"
        width={400} // Provide a width for optimization
        height={400} // Provide a height for optimization
        className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
        priority // Ensures this image is loaded with high priority
      />

      <table className="w-full mt-8">
        <tr className="w-full">
          <th className="border-2 , border-yellow-700 , p-1">S.no</th>
          <th className="border-2 , border-yellow-700 , p-1">Service Name</th>
          <th className="border-2 , border-yellow-700 , p-1">Charge</th>
        </tr>
        {work &&
          work.map((item) => (
            <tr className="text-center" key={item.sno}>
              <td>{item.sno}</td>
              <td>{item.name}</td>
              <td>{item.charge}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default page;
