"use client";
import { createContext } from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const FriendSContext = createContext();

const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetching data
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
  // Get calls
  const [calls, setCalls] = useState([]);
  console.log("Calls", calls);
  // Get text
  const [texts, setTexts] = useState([]);
  console.log("Texts", texts);
  // Get Video
  const [videos, setVideos] = useState([]);
  console.log("Videos", videos);

  const handleCall = (newFriend) => {
    const isExist = calls.find((call) => call.id == newFriend.id);
    const isBusy =
      texts.find((t) => t.id == newFriend.id) ||
      videos.find((v) => v.id == newFriend.id);

    if (isBusy) {
      toast.error(`${newFriend.name} is busy right now`);
      return;
    }

    if (!isExist) {
      if (!loading) {
        setCalls([...calls, newFriend]);
        toast.success(`Call with ${newFriend.name}`, {
          position: "top-left",
          autoClose: 2000,
        });
      } else {
        toast.warning("Request is loading...");
      }
    } else {
      toast.error(`${newFriend.name} already in call`);
    }
  };

  const handleText = (newFriend) => {
    const isExist = texts.find((text) => text.id == newFriend.id);
    const isBusy =
      calls.find((c) => c.id == newFriend.id) ||
      videos.find((v) => v.id == newFriend.id);

    if (isBusy) {
      toast.error(`${newFriend.name} is busy right now`);
      return;
    }

    if (!isExist) {
      if (!loading) {
        setTexts([...texts, newFriend]);
        toast.success(`Text with ${newFriend.name}`, {
          position: "top-left",
          autoClose: 2000,
        });
      } else {
        toast.warning("Request is loading...");
      }
    } else {
      toast.error(`${newFriend.name} already in chat`);
    }
  };

  const handleVideo = (newFriend) => {
    const isExist = videos.find((video) => video.id == newFriend.id);
    const isBusy =
      texts.find((t) => t.id == newFriend.id) ||
      calls.find((c) => c.id == newFriend.id);

    if (isBusy) {
      toast.error(`${newFriend.name} is busy right now`);
      return;
    }

    if (!isExist) {
      if (!loading) {
        setVideos([...videos, newFriend]);
        toast.success(`Video with ${newFriend.name}`, {
          position: "top-left",
          autoClose: 2000,
        });
      } else {
        toast.warning("Request is loading...");
      }
    } else {
      toast.error(`${newFriend.name} already in video call`);
    }
  };
  // All data
  const props = {
    friends,
    loading,
    handleCall,
    handleText,
    handleVideo,
    calls,
    texts,
    videos,
  };
  return (
    <FriendSContext.Provider value={props}>{children}</FriendSContext.Provider>
  );
};

export default FriendsProvider;
