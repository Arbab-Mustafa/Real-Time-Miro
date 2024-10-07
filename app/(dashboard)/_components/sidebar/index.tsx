import React from "react";
import NewButton from "./NewButton";

const Sidebar = () => {
  return (
    <aside className="fixed  z-[1] left-0 w-[60px] bg-blue-950 h-full flex flex-col p-3 gap-y-3 text-white ">
      <NewButton />
    </aside>
  );
};

export default Sidebar;
