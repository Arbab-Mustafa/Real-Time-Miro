import React from "react";

const Toolbar = () => {
  return (
    <div className="flex flex-col gap-y-4 absolute top-[50%] -translate-y-[50%]">
      <div className="flex flex-col bg-white rounded-md gap-y-1 items-center shadow-md">
        <div>Pencil</div>
        <div>Square</div>
        <div>Circle</div>
      </div>
    </div>
  );
};

export default Toolbar;
