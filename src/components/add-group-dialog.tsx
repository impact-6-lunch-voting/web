import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import React from "react";
import { AddGroupForm } from "~/components/add-group-form";
import { DialogBody } from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";

export function AddGroupDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Gruppe hinzufügen</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Gruppe hinzufügen</DialogTitle>
          <DialogBody>
            <AddGroupForm />
          </DialogBody>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
