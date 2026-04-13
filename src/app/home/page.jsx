import AddFriends from "@/components/homepage/AddFriends";
import Friends from "@/components/homepage/Friends";
import Stats from "@/components/homepage/Stats";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <AddFriends />
      <Stats />
      <Friends />
    </div>
  );
};

export default HomePage;
