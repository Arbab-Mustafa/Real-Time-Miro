"use client";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link2 } from "lucide-react";

interface ActionProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

const Action = ({ children, side, sideOffset, id, title }: ActionProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        side={side}
        sideOffset={sideOffset}
        className="w-60"
        onClick={(e) => e.stopPropagation()}
      >
        <DropdownMenuItem>
          <Link2 className="h-4 w-4 mr-2" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Action;
