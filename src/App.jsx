import React, { useState } from "react";
import Skeleton from "./Components/Skeleton";

const App = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 6000);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      {loading ? (
        <Skeleton />
      ) : (
        <div className="w-[50%] shadow-md p-6 flex gap-6 flex-col">
          <h1 className="text-[3rem] text-blue-600 font-bold">
            React Loading Skeleton
          </h1>
          <p>
            React Loading Skeleton is a React component that simulates a loading
            skeleton. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Non accusantium illo tempora est, consequatur reiciendis dolore
            beatae natus veniam a similique, modi nam animi unde ullam at?
            Repellat magni officia iste? Consequatur quisquam harum officia
            voluptatibus dolor illo omnis commodi excepturi vero exercitationem
            inventore nihil voluptas, ex, eaque eveniet officiis!
          </p>
          <button className=" w-[150px] py-2 px-6 outline-none border-none bg-blue-600 text-[#fff]">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
