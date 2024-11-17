"use client";
import { Loader } from "lucide-react";
import React from "react";
import BoardInfo from "./info";
import Participants from "./participants";

const Loading = () => {
  return (
    <main className="h-full w-full relative  bg-neutral-100 touch-none flex items-center justify-center">
      <Loader className="w-6 h-6  text-muted-foreground animate-spin" />
      <BoardInfo.Skeleton />
      <Participants.Skeleton />
    </main>
  );
};

export default Loading;
