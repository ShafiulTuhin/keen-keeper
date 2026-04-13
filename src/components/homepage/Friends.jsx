"use client";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import { LuGitPullRequest } from "react-icons/lu";
import { DotLoader } from "react-spinners";

const friendPromise = fetch("/data.json").then((res) => res.json());

const Friends = () => {
  const [friends, setFriends] = useState([]);
  console.log(friends);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchApps = async () => {
      const res = await fetch("/data.json");
      const friendsData = await res.json();

      setTimeout(() => {
        setFriends(friendsData);
        setLoading(false);
      }, 1000);
    };
    fetchApps();
  }, []);

  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="font-bold text-3xl text-[#1F2937] mb-8">Your Friends</h2>
      {loading ? (
        <div className="flex justify-center py-15">
          <DotLoader color="#244D3F" />
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-8">
          {friends.map((friend) => (
            <div
              //   href={`{/${friend.id}`}
              key={friend.id}
              className="shadow-lg py-10 flex items-center justify-center flex-col rounded-lg space-y-4"
            >
              <Image
                src={friend.picture}
                alt={friend.name}
                width={100}
                height={100}
                className="rounded-full"
              />
              <h2 className="text-[#1F2937] font-bold text-[20px]">
                {friend.name}
              </h2>
              <p className="text-[#64748B]">
                {friend.days_since_contact} day
                {friend.days_since_contact > 1 ? "s" : ""} ago
              </p>

              <div className="flex gap-2">
                {friend.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="text-sm bg-green-200 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <h2
                className={`${friend.status === "overdue" ? "bg-red-500" : friend.status === "On-Track" ? "bg-green-500" : friend.status === "Almost due" ? "bg-amber-500" : "bg-gray-500"} p-2 rounded-full text-white`}
              >
                {friend.status}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Friends;
