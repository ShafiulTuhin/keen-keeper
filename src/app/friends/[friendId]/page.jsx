"use client";
import FriendDetailsBottom from "@/components/friends-details/FriendDetailsBottom";
import FriendDetailsMiddle from "@/components/friends-details/FriendDetailsMiddle";
import FriendDetailsTop from "@/components/friends-details/FriendDetailsTop";
import { FriendSContext } from "@/context/FriendsProvider";
import { useParams } from "next/navigation";
import React, { useContext } from "react";

const FriendsDetails = ({ params }) => {
  params = useParams();
  const { friendId } = params;
  const { friends } = useContext(FriendSContext);
  const friend = friends.find((friend) => friend.id === parseInt(friendId));

  return (
    <div className="container mx-auto py-20 ">
      <FriendDetailsTop friend={friend} />
      <FriendDetailsMiddle friend={friend} />
      <FriendDetailsBottom />
    </div>
  );
};

export default FriendsDetails;
