"use client";
import { FriendSContext } from "@/context/FriendsProvider";
import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const Dashboard = () => {
  const { friends, calls, texts, videos } = useContext(FriendSContext);

  const data = [
    { name: "All", value: friends.length, fill: "#0088FE" },
    { name: "Calls", value: calls.length, fill: "#1ef320" },
    { name: "Texts", value: texts.length, fill: "#af11ed" },
    { name: "Videos", value: videos.length, fill: "#ffcd03" },
  ];
  return (
    <div className="border border-slate-300">
      <h2 className="text-center mb-10 font-semibold text-[#00f93] text-2xl">
        Friendship Analytics
      </h2>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
          margin: "auto",
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Dashboard;
