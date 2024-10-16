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
import { useRenameModel } from "@/store/useRenameModel";

const RenameModel = () => {
  const { isOpen, onClose, initialValues } = useRenameModel();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Board Title</DialogTitle>
          <DialogDescription>Enter New Title</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RenameModel;
