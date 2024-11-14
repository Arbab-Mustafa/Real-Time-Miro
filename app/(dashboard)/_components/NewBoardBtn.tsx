/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import useMutationAip from "@/hooks/useMutationAip";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import React from "react";
import { toast } from "sonner";

interface NewBoardBtnProps {
  orgId: string;
  disabled: boolean;
}

const NewBoardBtn = ({ orgId, disabled }: NewBoardBtnProps) => {
  const { mutate, pending } = useMutationAip(api.board.create);
  const Router = useRouter();

  const handleClick = () => {
    mutate({ orgId, title: "New Board" })
      .then((res) => {
        toast.success("Board created successfully");
        Router.push(`/board/${res}`);
      })
      .catch((err) => {
        toast.error("Failed to create board");
      });
  };

  return (
    <button
      disabled={pending || disabled}
      onClick={handleClick}
      className={cn(
        "col-span-1 aspect-[100/127 ] bg-blue-600 rounded-lg hover:to-blue-800 flex flex-col items-center justify-center py-5",
        (pending || disabled) &&
          "opacity-75 cursor-not-allowed hover:to-blue-600"
      )}
    >
      {/* <div /> */}
      <Plus className="w-7 h-7 text-white stroke-1" />
      <span className="text-white text-xs">New Board</span>
    </button>
  );
};

export default NewBoardBtn;
