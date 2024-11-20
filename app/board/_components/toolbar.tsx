import React from "react";
import ToolBtn from "./ToolButton";
import {
  Circle,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";
import { CanvasMode, CanvasState } from "@/types/canvas";

interface ToolbarProps {
  canvasState: CanvasState;
  setCanvasState: (state: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const Toolbar = ({
  canvasState,
  setCanvasState,
  undo,
  redo,
  canRedo,
  canUndo,
}: ToolbarProps) => {
  return (
    <div className="flex flex-col gap-y-4 absolute top-[50%] -translate-y-[50%]">
      <div className="flex flex-col bg-white rounded-md gap-y-1 items-center shadow-md">
        <ToolBtn
          label="Select"
          icon={MousePointer2}
          onClick={() => setCanvasState({ Mode: CanvasMode.None })}
          isActive={canvasState.Mode === CanvasMode.None}
        />
        <ToolBtn
          label="Text"
          icon={Type}
          onClick={() => setCanvasState({ Mode: CanvasMode.inserting })}
          isActive={canvasState.Mode === CanvasMode.inserting}
        />
        <ToolBtn
          label="Sticky note"
          icon={StickyNote}
          onClick={() => {}}
          isActive={false}
        />
        <ToolBtn
          label="Rectangle"
          icon={Square}
          onClick={() => {}}
          isActive={false}
        />
        <ToolBtn
          label="Ellipse"
          icon={Circle}
          onClick={() => {}}
          isActive={false}
        />
        <ToolBtn
          label="Pen"
          icon={Pencil}
          onClick={() => {}}
          isActive={false}
        />
      </div>
      <div className="flex flex-col bg-white rounded-md p-1.5 items-center shadow-md">
        <ToolBtn label="Undo" icon={Undo2} onClick={undo} isActive={!canUndo} />
        <ToolBtn label="Redo" icon={Redo2} onClick={redo} isActive={!canRedo} />
      </div>
    </div>
  );
};

export default Toolbar;
