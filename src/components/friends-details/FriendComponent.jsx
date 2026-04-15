"use client";

import { useContext } from "react";
import FriendDetailsBottom from "./FriendDetailsBottom";
import FriendDetailsMiddle from "./FriendDetailsMiddle";
import FriendDetailsTop from "./FriendDetailsTop";
import { FriendSContext } from "@/context/FriendsProvider";
import { useParams } from "next/navigation";

const FriendComponent = ({ params }) => {
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

export default FriendComponent;
