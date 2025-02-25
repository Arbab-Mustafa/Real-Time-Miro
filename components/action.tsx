"use client";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { api } from "@/convex/_generated/api";
import useMutationAip from "@/hooks/useMutationAip";
import ConfirmModel from "./ConfirmModel";
import { Button } from "./ui/button";
import { useRenameModel } from "@/store/useRenameModel";

interface ActionProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

const Action = ({ children, side, sideOffset, id, title }: ActionProps) => {
  const { onOpen } = useRenameModel();
  const { mutate, pending } = useMutationAip(api.board.remove);

  const copyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success("Link copied to clipboard"))
      .catch(() => toast.error("Failed to copy link"));
  };

  const handleDelete = () => {
    mutate({ id })
      .then(() => {
        toast.success("Board deleted !");
      })
      .catch(() => {
        toast.error("Failed to delete !");
      });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        side={side}
        sideOffset={sideOffset}
        className="w-60"
        onClick={(e) => e.stopPropagation()}
      >
        <DropdownMenuItem className="p-3 cursor-pointer" onClick={copyLink}>
          <Link2 className="h-4 w-4 mr-2" />
          Copy Link
        </DropdownMenuItem>
        {/*  */}
        <DropdownMenuItem
          className="p-3 cursor-pointer"
          onClick={() => onOpen(id, title)}
        >
          <Pencil className="h-4 w-4 mr-2" />
          Rename Title
        </DropdownMenuItem>
        {/*  */}
        <ConfirmModel
          heder="delete Board?"
          description="this will delete every thing."
          disabled={pending}
          onConfirm={handleDelete}
        >
          <Button
            variant="ghost"
            className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
            // onClick={handleDelete}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </ConfirmModel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Action;
