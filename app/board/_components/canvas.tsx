"use client";
import React, { useCallback, useState } from "react";
import BoardInfo from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";
import { Camera, CanvasMode, CanvasState } from "@/types/canvas";
import {
  useHistory,
  useCanRedo,
  useCanUndo,
  useMutation,
} from "@/liveblocks.config";
import { CursorPresent } from "./CursorPresent";
import { pointerEventtoCanvasPoint } from "@/lib/utils";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    Mode: CanvasMode.None,
  });

  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });

  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }));
  }, []);

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();

      const current = pointerEventtoCanvasPoint(e, camera);

      setMyPresence({ cursor: current });
    },
    [boardId]
  );

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
      <svg
        className="h-[100vh] w-[100vw]"
        onWheel={onWheel}
        onPointerMove={onPointerMove}
      >
        <g>
          <CursorPresent />
        </g>
      </svg>
    </main>
  );
};
export default Canvas;
