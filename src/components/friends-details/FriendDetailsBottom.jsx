import React from "react";

const FriendDetailsBottom = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full mt-10">
      <div className="hidden md:block md:col-span-2"></div>

      <div className="md:col-span-3 flex flex-col gap-4 w-full">
        <div className="card bg-base-200 w-full">
          <div className="card-body">Item 1</div>
        </div>

        <div className="card bg-base-200 w-full">
          <div className="card-body">Item 2</div>
        </div>

        <div className="card bg-base-200 w-full">
          <div className="card-body">Item 3</div>
        </div>

        <div className="card bg-base-200 w-full">
          <div className="card-body">Item 4</div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsBottom;
