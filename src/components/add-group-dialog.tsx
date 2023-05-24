import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import React, { useState } from "react";
import { AddGroupForm } from "~/components/add-group-form";
import { DialogBody } from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import { Button } from "~/components/ui/button";

export function AddGroupDialog() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOnSubmitSuccessful() {
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button onClick={() => setIsOpen(true)}>Gruppe hinzufügen</Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Gruppe hinzufügen</DialogTitle>
          <DialogBody>
            <AddGroupForm onSubmitSuccessful={handleOnSubmitSuccessful} />
          </DialogBody>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
