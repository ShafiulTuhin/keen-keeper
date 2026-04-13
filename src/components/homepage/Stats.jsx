import React from "react";

const Stats = () => {
  return (
    <div className="container mx-auto grid lg:grid-cols-4 grid-cols-2 gap-4 px-4 lg:px-0 border-b-1 border-gray-200 pb-10">
      <div className="text-center shadow-lg py-10">
        <h2 className="text-2xl font-bold text-[#244D3F]">10</h2>
        <p className="text-[#64748B] mt-3">Total Friends</p>
      </div>
      <div className="text-center shadow-lg py-10">
        <h2 className="text-2xl font-bold text-[#244D3F]">3</h2>
        <p className="text-[#64748B] mt-3">On Track</p>
      </div>
      <div className="text-center shadow-lg py-10">
        <h2 className="text-2xl font-bold text-[#244D3F]">6</h2>
        <p className="text-[#64748B] mt-3">Need Attention</p>
      </div>
      <div className="text-center shadow-lg py-10">
        <h2 className="text-2xl font-bold text-[#244D3F]">12</h2>
        <p className="text-[#64748B] mt-3">Interactions This Month</p>
      </div>
    </div>
  );
};

export default Stats;
<h2>Total Stat:25</h2>;
