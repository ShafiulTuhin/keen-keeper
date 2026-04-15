"use client";
import { FriendSContext } from "@/context/FriendsProvider";
import { DotGothic16 } from "next/font/google";
import React, { useContext } from "react";
import { DotLoader, FadeLoader } from "react-spinners";

const Stats = () => {
  const { friends, loading } = useContext(FriendSContext);

  const onTrack = friends?.filter((track) => track.status === "On-Track");
  const needAttention = friends?.filter(
    (attention) => attention.need_attention === true,
  );
  const interaction = friends?.filter(
    (int) => int.interaction_this_month === "yes",
  );

  return (
    <div className="container mx-auto grid lg:grid-cols-4 grid-cols-2 gap-4 px-4 lg:px-0 border-b-1 border-gray-200 pb-10">
      <div className="text-center shadow-lg py-10">
        <h2 className="text-2xl font-bold text-[#244D3F] flex justify-center">
          {loading ? <FadeLoader size={20} color="#244D3F" /> : friends.length}
        </h2>
        <p className="text-[#64748B] mt-3">Total Friends</p>
      </div>
      <div className="text-center shadow-lg py-10">
        <h2 className="text-2xl font-bold text-[#244D3F] flex justify-center">
          {loading ? <FadeLoader size={20} color="#244D3F" /> : onTrack.length}
        </h2>
        <p className="text-[#64748B] mt-3">On Track</p>
      </div>
      <div className="text-center shadow-lg py-10">
        <h2 className="text-2xl font-bold text-[#244D3F] flex justify-center">
          {loading ? (
            <FadeLoader size={20} color="#244D3F" />
          ) : (
            needAttention.length
          )}
        </h2>
        <p className="text-[#64748B] mt-3">Need Attention</p>
      </div>
      <div className="text-center shadow-lg py-10">
        <h2 className="text-2xl font-bold text-[#244D3F] flex justify-center">
          {loading ? (
            <FadeLoader size={20} color="#244D3F" />
          ) : (
            interaction.length
          )}
        </h2>
        <p className="text-[#64748B] mt-3">Interactions This Month</p>
      </div>
    </div>
  );
};

export default Stats;
