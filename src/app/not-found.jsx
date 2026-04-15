import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Not Found",
  description: "Something went wrong",
};

const NoFound = () => {
  return (
    <div className="flex flex-col items-center pt-32 min-h-screen">
      <h2 className="text-[#244D3F] font-bold text-3xl">Not Found</h2>
      <p className="text-[#58cfa8]">Could not find requested resource</p>
      <Link href="/" className="btn bg-[#244D3F] mt-5 text-white">
        Return Home
      </Link>
    </div>
  );
};

export default NoFound;
