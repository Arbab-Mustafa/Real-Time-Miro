import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

const OrgInviteBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="" variant="outline">
          {" "}
          <Plus className="w-4 h-4 mr-2" /> Invite Member
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none   max-w-[820px]  ">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
};

export default OrgInviteBtn;
