"use client";
import { FriendSContext } from "@/context/FriendsProvider";
import { useContext } from "react";
import { DotLoader } from "react-spinners";
import FriendCard from "../ui/FriendCard";

const Friends = () => {
  const { friends, loading } = useContext(FriendSContext);
  console.log(friends);
  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="font-bold text-3xl text-[#1F2937] mb-8">Your Friends</h2>
      {loading ? (
        <div className="flex justify-center py-15">
          <DotLoader color="#244D3F" />
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend}></FriendCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Friends;
