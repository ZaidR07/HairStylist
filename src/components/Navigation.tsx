"use client";

import { useState } from "react";
import { HamIcon } from "../../public/media";
import { CloseIcon } from "../../public/media";
import Link from "next/link";

const Navigation = () => {
  const [hamopen, setHamOpen] = useState(false);
  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-transparent fixed right-0 top-5 z-[9998] w-full md:hidden lg:hidden 2xl:hidden">
        {!hamopen ? (
          <HamIcon
            onClick={() => setHamOpen(true)}
            className="ml-auto mr-2 my-auto align-baseline"
            fill="#fff"
            width={35}
            height={35}
          />
        ) : (
          <CloseIcon
            onClick={() => setHamOpen(false)}
            className="ml-auto mr-2 my-auto align-baseline"
            fill="#fff"
            width={35}
            height={35}
          />
        )}
      </nav>

      {/* Mobile Navigation */}
      {hamopen ? (
        <div className="mobile-nav rounded-bl-xl rounded-br-xl mx-[15%] top-0 w-[70%]  z-[9999] absolute bg-slate-300 bg-opacity-30 backdrop-blur-md shadow-lg border border-gray-50-300  py-2">
          {/* Menu content here */}
          <ul className="flex items-center justify-around h-full">
            <Link
            href="/"
            className="cursor-pointer"
            onClick={() => setHamOpen(false)}>
              Home
            </Link>
            <Link
            href="/About"
            className="cursor-pointer"
            onClick={() => setHamOpen(false)}>
              About
            </Link>
            <Link
            href="/Prices"
            className="cursor-pointer"
            onClick={() => setHamOpen(false)}>
              Prices
            </Link>
            <Link
            href="/Contact"
            className="cursor-pointer"
            onClick={() => setHamOpen(false)}>
              Contact
            </Link>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Navigation;
