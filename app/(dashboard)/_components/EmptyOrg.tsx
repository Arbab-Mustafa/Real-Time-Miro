import React from "react";
import { Frown } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const EmptyOrg = () => {
  return (
    <div className="items-center flex  gap-2 flex-col justify-center h-full">
      <Frown className="w-16 h-16 md:w-20 md:h-20" />
      <h2 className="text-xl md:text-2xl font-semibold  ">Welcome to MIRO</h2>
      <span className="text-muted-foreground   text-sm">
        Create an Org to get started
      </span>
      <div className="mt-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"lg"}>Create Organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0  bg-transparent  border-none  w-fit">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmptyOrg;
