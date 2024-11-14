"use client";
import React from "react";
import BoardInfo from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";

const Canvas = () => {
  return (
    <main className="h-full w-full relative  bg-neutral-100 touch-none">
      <BoardInfo />
      <Participants />
      <Toolbar />
    </main>
  );
};
export default Canvas;
