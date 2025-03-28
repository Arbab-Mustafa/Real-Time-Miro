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
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";

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
          isActive={
            canvasState.Mode === CanvasMode.None ||
            canvasState.Mode === CanvasMode.Pressing ||
            canvasState.Mode === CanvasMode.Translating ||
            canvasState.Mode === CanvasMode.SelectingNet ||
            canvasState.Mode === CanvasMode.Resizing
          }
        />
        <ToolBtn
          label="Text"
          icon={Type}
          onClick={() =>
            setCanvasState({
              Mode: CanvasMode.Inserting,
              LayerType: LayerType.Text,
            })
          }
          isActive={
            canvasState.Mode === CanvasMode.Inserting &&
            canvasState.LayerType === LayerType.Text
          }
        />
        <ToolBtn
          label="Sticky note"
          icon={StickyNote}
          onClick={() =>
            setCanvasState({
              Mode: CanvasMode.Inserting,
              LayerType: LayerType.Note,
            })
          }
          isActive={
            canvasState.Mode === CanvasMode.Inserting &&
            canvasState.LayerType === LayerType.Note
          }
        />
        <ToolBtn
          label="Rectangle"
          icon={Square}
          onClick={() =>
            setCanvasState({
              Mode: CanvasMode.Inserting,
              LayerType: LayerType.Rectangle,
            })
          }
          isActive={
            canvasState.Mode === CanvasMode.Inserting &&
            canvasState.LayerType === LayerType.Rectangle
          }
        />
        <ToolBtn
          label="Ellipse"
          icon={Circle}
          onClick={() =>
            setCanvasState({
              Mode: CanvasMode.Inserting,
              LayerType: LayerType.Ellipse,
            })
          }
          isActive={
            canvasState.Mode === CanvasMode.Inserting &&
            canvasState.LayerType === LayerType.Ellipse
          }
        />
        <ToolBtn
          label="Pen"
          icon={Pencil}
          onClick={() =>
            setCanvasState({
              Mode: CanvasMode.Pencil,
            })
          }
          isActive={canvasState.Mode === CanvasMode.Pencil}
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
