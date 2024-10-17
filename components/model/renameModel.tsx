"use client";
import React, { FormEventHandler, useEffect, useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRenameModel } from "@/store/useRenameModel";
import { Input } from "../ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import useMutationAip from "@/hooks/useMutationAip";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const RenameModel = () => {
  const { mutate, pending } = useMutationAip(api.board.update);
  const { isOpen, onClose, initialValues } = useRenameModel();
  const [title, setTitle] = useState(initialValues.title);

  useEffect(() => {
    setTitle(initialValues.title);
  }, [initialValues.title]);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    mutate({ id: initialValues.id, title })
      .then(() => {
        toast.success("Board title updated !");
        onClose();
      })
      .catch(() => {
        toast.error("Failed to update board title !");
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Board Title</DialogTitle>
          <DialogDescription>Enter New Title</DialogDescription>
        </DialogHeader>
        <DialogDescription>
          <form onSubmit={onSubmit} className="space-y-4">
            <Input
              disabled={pending}
              required
              maxLength={40}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Board Title"
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={false}>
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default RenameModel;
