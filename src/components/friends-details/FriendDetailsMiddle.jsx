import Image from "next/image";
import React, { useContext, useState } from "react";
import { FaArchive, FaTrash } from "react-icons/fa";
import { HiBellSnooze } from "react-icons/hi2";
import CallImg from "@/assets/call.png";
import TextImg from "@/assets/text.png";
import VideoImg from "@/assets/video.png";
import { FriendSContext } from "@/context/FriendsProvider";

const FriendDetailsMiddle = ({ friend }) => {
  const { handleCall, handleText, handleVideo } = useContext(FriendSContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full mt-10">
      {/* LEFT SIDE */}
      <div className="md:col-span-2 grid grid-rows-3 gap-3">
        <div className="card bg-base-200">
          <div className="card-body py-3 flex items-center justify-center">
            <button className="text-[#1F2937] flex items-center gap-2 font-bold text-[15px] cursor-pointer">
              <HiBellSnooze /> Snooze for 2 weeks
            </button>
          </div>
        </div>

        <div className="card bg-base-200">
          <div className="card-body py-3 flex items-center justify-center">
            <button className="text-[#1F2937] flex items-center gap-2 font-bold text-[15px] cursor-pointer">
              <FaArchive /> Archive
            </button>
          </div>
        </div>

        <div className="card bg-base-200">
          <div className="card-body py-3 flex items-center justify-center">
            <button className="text-red-400 flex items-center gap-2 font-bold text-[15px] cursor-pointer">
              <FaTrash /> Delete
            </button>
          </div>
        </div>
      </div>

      <div className="md:col-span-3 grid grid-rows-2 gap-3 shadow-xl p-3">
        <div className="card shadow-none bg-transparent">
          <div className="card-body py-3">
            <h2 className="text-xl font-bold">Quick Check-In</h2>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => handleCall(friend)}
            className="btn btn-ghost p-3 h-auto shadow-md"
          >
            <Image src={CallImg} alt="Call_img" width={80} height={80} />
          </button>

          <button
            onClick={() => handleText(friend)}
            className="btn btn-ghost p-3 h-auto shadow-md"
          >
            <Image src={TextImg} alt="Call_img" width={80} height={80} />
          </button>

          <button
            onClick={() => handleVideo(friend)}
            className="btn btn-ghost p-3 h-auto shadow-md"
          >
            <Image src={VideoImg} alt="Call_img" width={80} height={80} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsMiddle;
