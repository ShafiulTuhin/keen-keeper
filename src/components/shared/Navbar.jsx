"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHome } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
import { IoIosStats } from "react-icons/io";

const Navbar = () => {
  const pathName = usePathname();

  const activeTab = (path) => {
    return pathName === path
      ? "text-white bg-[#244D3F] rounded-lg px-3 py-2"
      : "px-3 py-2";
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <h2 className="font-bold text-2xl">
          Keen<span className="text-[#244D3F] font-normal">Keeper</span>{" "}
        </h2>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 lg:text-[16px] font-medium lg:gap-5">
          <li>
            <Link href={"/"} className={`${activeTab("/")}`}>
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link href={"/timeline"} className={`${activeTab("/timeline")}`}>
              <FaTimeline /> Timeline
            </Link>
          </li>
          <li>
            <Link href={"/stats"} className={`${activeTab("/stats")}`}>
              <IoIosStats /> Stats
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
