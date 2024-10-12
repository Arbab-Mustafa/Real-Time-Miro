"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { ClipboardCheck } from "lucide-react";
import { useOrganization } from "@clerk/nextjs";

const Emptyboard = () => {
  const { organization } = useOrganization();
  const create = useMutation(api.board.create);

  const handleCLick = () => {
    if (!organization) return;
    create({
      orgId: organization.id,
      title: "New Board",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-1 h-full">
      <ClipboardCheck className="w-5 h-5 md:w-16 md:h-16 animate-pulse transition delay-75" />

      <h2 className="text-xl md:text-2xl mt-4  font-semibold">
        Create Your First Board
      </h2>
      <div className="mt-3">
        <Button size={"lg"} onClick={handleCLick}>
          Create board
        </Button>
      </div>
    </div>
  );
};

export default Emptyboard;
