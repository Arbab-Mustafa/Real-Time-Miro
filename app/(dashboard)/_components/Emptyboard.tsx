"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";

import { ClipboardCheck } from "lucide-react";
import { useOrganization } from "@clerk/nextjs";
import useMutationAip from "@/hooks/useMutationAip";
import { toast } from "sonner";

const Emptyboard = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useMutationAip(api.board.create);
  const Router = useRouter();

  const handleCLick = () => {
    if (!organization) return;
    mutate({
      orgId: organization.id,
      title: "New Board",
    })
      .then((id) => {
        toast.success("Board created successfully");
        Router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-1 h-full">
      <ClipboardCheck className="w-5 h-5 md:w-16 md:h-16 animate-pulse transition delay-75" />

      <h2 className="text-xl md:text-2xl mt-4  font-semibold">
        Create Your First Board
      </h2>
      <div className="mt-3">
        <Button size={"lg"} onClick={handleCLick} disabled={pending}>
          Create board
        </Button>
      </div>
    </div>
  );
};

export default Emptyboard;
