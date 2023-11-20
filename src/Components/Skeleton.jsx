import React from "react";

const Skeleton = () => {
  return (
    <>
      <div className="w-[50%] shadow-md p-6 flex gap-6 flex-col">
        <h1 className="w-full animate-pulse h-[50px] bg-gray-200"></h1>
        <p className="w-full animate-pulse h-[180px] bg-gray-200"></p>
        <button className=" w-[150px] animate-pulse h-[50px] bg-gray-200"></button>
      </div>
    </>
  );
};

export default Skeleton;
