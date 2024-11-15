import React from "react";

const Toolbar = () => {
  return (
    <div className="flex flex-col gap-y-4 absolute top-[50%] -translate-y-[50%]">
      <div className="flex flex-col bg-white rounded-md gap-y-1 items-center shadow-md">
        <div>Pencil</div>
        <div>Square</div>
        <div>Circle</div>
      </div>
      <div className="flex flex-col bg-white rounded-md p-1.5 items-center shadow-md">
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  );
};

export default Toolbar;

Toolbar.Skeleton = function ToolbarSkeleton() {
  return (
    <div className="flex flex-col gap-y-4 absolute top-[50%]   shadow-md  rounded-md -translate-y-[50%] bg-white h-[360px] w-[52px]" />
  );
};
