import { FriendSContext } from "@/context/FriendsProvider";
import Image from "next/image";
import React, { useContext } from "react";
import { DotLoader } from "react-spinners";

const FriendDetailsTop = ({ friend }) => {
  const { loading } = useContext(FriendSContext);

  if (loading) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <DotLoader color="#244D3F" className="" />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-4 w-full">
      <div className="md:col-span-2 md:row-span-2 card  shadow-xl">
        <div className="card-body flex items-center justify-center space-y-4">
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
          <h2
            className={`${friend.status === "overdue" ? "bg-red-500" : friend.status === "On-Track" ? "bg-green-500" : friend.status === "Almost due" ? "bg-amber-500" : "bg-gray-500"} p-2 rounded-full text-white`}
          >
            {friend.status}
          </h2>
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
          <h2 className="font-medium text-[#64748B]">{friend.bio}</h2>
          <h2 className="font-medium text-[#424242]">
            Preferred: {friend.preferred_contact}
          </h2>
        </div>
      </div>

      <div className="card shadow">
        <div className="card-body flex items-center justify-center">
          <div className="card-body flex items-center justify-center">
            <h2 className="font-bold text-2xl text-[#244D3F]">
              {friend.days_since_contact}
            </h2>
            <p className="font-medium text-[#64748B]">Days Since Contact</p>
          </div>
        </div>
      </div>

      <div className="card shadow">
        <div className="card-body flex items-center justify-center">
          <div className="card-body flex items-center justify-center">
            <h2 className="font-bold text-2xl text-[#244D3F]">
              {friend.next_due_date}
            </h2>
            <p className="font-medium text-[#64748B]">Next Due</p>
          </div>
        </div>
      </div>
      <div className="card shadow">
        <div className="card-body flex items-center justify-center">
          <div className="card-body flex items-center justify-center">
            <h2 className="font-bold text-2xl text-[#244D3F]">{friend.goal}</h2>
            <p className="font-medium text-[#64748B]">Goal(Days)</p>
          </div>
        </div>
      </div>

      <div className="md:col-span-3 card shadow-xl">
        <div className="card-body flex flex-col">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-[#244D3F] text-2xl font-bold">
              Relationship Goal
            </h2>
            <button className="btn">Edit</button>
          </div>

          <p className="text-[#244D3F] text-start mt-5">
            Connect every <span className="font-bold">{friend.goal} days</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsTop;
