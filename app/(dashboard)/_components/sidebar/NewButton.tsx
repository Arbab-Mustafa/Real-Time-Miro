"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/clerk-react";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <button className="flex items-center justify-center bg-white/25 h-full w-full rounded-md opacity-60  hover:opacity-100 transition">
            <Plus className="text-white" />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none w-[320px] md:w-auto max-w-[430px]">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;