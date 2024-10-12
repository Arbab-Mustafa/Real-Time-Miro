import { Info } from "lucide-react";
import React from "react";

const EmptySearch = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 h-full">
      <Info className="w-5 h-5 md:w-16 md:h-16 animate-pulse transition delay-75" />
      <h2 className="text-xl md:text-2xl mt-4  font-semibold">
        No Result Found
      </h2>
    </div>
  );
};

export default EmptySearch;
