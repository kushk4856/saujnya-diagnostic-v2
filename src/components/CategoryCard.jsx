import React from "react";

export default function CategoryCard({ test }) {
  return (
    <div className=" group overflow-hidden rounded-md transition-all w-full duration-300 cursor-pointer hover:bg-primary  p-4 custom-shadow flex flex-col justify-center items-center gap-5">
      <img
        src={test.icon}
        alt=""
        className="w-[120px] h-[120px] transition-all duration-300 group-hover:scale-[1.2]"
      />
      <h1 className="text-2xl group-hover:text-white font-openSans font-semibold">
        {test.name}
      </h1>
    </div>
  );
}
