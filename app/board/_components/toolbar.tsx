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

const Toolbar = () => {
  return (
    <div className="flex flex-col gap-y-4 absolute top-[50%] -translate-y-[50%]">
      <div className="flex flex-col bg-white rounded-md gap-y-1 items-center shadow-md">
        <ToolBtn
          label="Select"
          icon={MousePointer2}
          onClick={() => {}}
          isActive={false}
        />
        <ToolBtn label="Text" icon={Type} onClick={() => {}} isActive={false} />
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
        <ToolBtn
          label="Undo"
          icon={Undo2}
          onClick={() => {}}
          isActive={false}
        />
        <ToolBtn
          label="Redo"
          icon={Redo2}
          onClick={() => {}}
          isActive={false}
        />
      </div>
    </div>
  );
};

export default Toolbar;
