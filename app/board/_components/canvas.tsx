"use client";
import React, { useState } from "react";
import BoardInfo from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";
import { CanvasMode, CanvasState } from "@/types/canvas";
import { useHistory, useCanRedo, useCanUndo } from "@/liveblocks.config";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    Mode: CanvasMode.None,
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  return (
    <main className="h-full w-full relative  bg-neutral-100 touch-none">
      <BoardInfo boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        undo={history.undo}
        redo={history.redo}
      />
    </main>
  );
};
export default Canvas;
