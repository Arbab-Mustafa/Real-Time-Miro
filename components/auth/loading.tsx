import { Loader } from "lucide-react";

import React from "react";

const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-y-4 ">
      <Loader size="3rem" className="animate-pulse duration-700" />
    </div>
  );
};

export default Loading;
