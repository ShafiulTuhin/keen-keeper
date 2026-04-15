"use client";
import { FriendSContext } from "@/context/FriendsProvider";
import React, { useContext, useState } from "react";
import { DotLoader } from "react-spinners";
import CallImg from "@/assets/call.png";
import TextImg from "@/assets/text.png";
import VideoImg from "@/assets/video.png";
import Image from "next/image";

const Timeline = () => {
  const { calls, texts, videos, loading } = useContext(FriendSContext);
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  // While loading
  if (loading) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <DotLoader color="#7c49eb" />
      </div>
    );
  }
  // While no data
  if (calls.length === 0 && texts.length === 0 && videos.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] w-full">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-600">
            No data found
          </h2>
          <p className="text-gray-400 mt-2">Nothing to show here right now</p>
        </div>
      </div>
    );
  }
  // Implementing filtering:
  const [filter, setFilter] = useState("All");
  const filteredCalls = filter === "All" || filter === "Call" ? calls : [];
  const filteredTexts = filter === "All" || filter === "Text" ? texts : [];
  const filteredVideos = filter === "All" || filter === "Video" ? videos : [];
  return (
    <div className=" space-y-4">
      <h2 className="font-bold text-[#1F2937] lg:text-5xl text-3xl">
        Timeline
      </h2>
      {/* Filter part */}
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 w-52 flex justify-between items-center"
        >
          <span className="font-bold text-[#64748B]">
            {filter === "All" ? "Filter timeline" : filter}
          </span>

          <span>▼</span>
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a onClick={() => setFilter("All")}>All</a>
          </li>
          <li>
            <a onClick={() => setFilter("Call")}>Call</a>
          </li>
          <li>
            <a onClick={() => setFilter("Text")}>Text</a>
          </li>
          <li>
            <a onClick={() => setFilter("Video")}>Video</a>
          </li>
        </ul>
      </div>
      {filteredCalls.map((call) => (
        <div key={call.id} className="flex gap-3 items-center bg-slate-200 p-3">
          <Image src={CallImg} alt="Calling_img" width={50} height={50} />
          <div>
            <p>
              <span className="font-bold text-[#244D3F]">Calling</span> to{" "}
              <span className="text-[#64748B]">{call.name}...</span>
            </p>
            <span className="text-sm text-gray-400">{date}</span>
          </div>
        </div>
      ))}
      {filteredTexts.map((text) => (
        <div key={text.id} className="flex gap-3 items-center bg-slate-200 p-3">
          <Image src={TextImg} alt="Calling_img" width={50} height={50} />
          <div>
            <p>
              <span className="font-bold text-[#244D3F]">Chatting</span> with{" "}
              <span className="text-[#64748B]">{text.name}...</span>
            </p>
            <span className="text-sm text-gray-400">{date}</span>
          </div>
        </div>
      ))}
      {filteredVideos.map((video) => (
        <div
          key={video.id}
          className="flex gap-3 items-center bg-slate-200 p-3"
        >
          <Image src={VideoImg} alt="Calling_img" width={50} height={50} />
          <div>
            <p>
              <span className="font-bold text-[#244D3F]">Video call</span> to{" "}
              <span className="text-[#64748B]">{video.name}...</span>
            </p>
            <span className="text-sm text-gray-400">{date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
