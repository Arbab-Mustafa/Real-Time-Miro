"use client";
import React from "react";
import BoardInfo from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";

import { useSelf } from "../../../liveblocks.config";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const info = useSelf((me) => me.info);

  console.log("Canvas Info ", { info });

  return (
    <main className="h-full w-full relative  bg-neutral-100 touch-none">
      <BoardInfo />
      <Participants />
      <Toolbar />
    </main>
  );
};
export default Canvas;
