import AddFriends from "@/components/homepage/AddFriends";
import Image from "next/image";
import HomePage from "./home/page";
import Stats from "@/components/homepage/Stats";
import Friends from "@/components/homepage/Friends";

export default function Home() {
  return (
    <>
      <HomePage />
      <Stats />
      <Friends />
    </>
  );
}
