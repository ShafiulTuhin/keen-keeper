import React from "react";
import { FaPlus } from "react-icons/fa";

const AddFriends = () => {
  return (
    <div className="container mx-auto lg:py-20 py-10">
      <h2 className="text-center lg:text-5xl text-3xl font-bold text-[#1F2937]">
        Friends to keep close in your life
      </h2>
      <p className="text-[#64748B] text-center my-5 px-4 lg:px-0">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>
      <div className="flex justify-center">
        <button className="flex gap-2 items-center btn bg-[#244D3F] text-white ">
          <FaPlus />
          Add a Friend
        </button>
      </div>
    </div>
  );
};

export default AddFriends;
