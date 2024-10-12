import { Button } from "@/components/ui/button";
import { ClipboardCheck } from "lucide-react";
import React from "react";

const Emptyboard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 h-full">
      <ClipboardCheck className="w-5 h-5 md:w-16 md:h-16 animate-pulse transition delay-75" />

      <h2 className="text-xl md:text-2xl mt-4  font-semibold">
        Create Your First Board
      </h2>
      <div className="mt-3">
        <Button size={"lg"}>Create board</Button>
      </div>
    </div>
  );
};

export default Emptyboard;
