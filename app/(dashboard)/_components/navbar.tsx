"use client";
import { UserButton } from "@clerk/clerk-react";

import SearchInput from "./search-input";

const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5  ">
      <div className="hidden lg:flex lg:flex-1 ">
        <SearchInput />
      </div>
      <div className="block"></div>

      <UserButton />
    </div>
  );
};

export default Navbar;
