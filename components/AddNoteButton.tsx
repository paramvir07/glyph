"use client";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { addNote } from "@/app/actions/user.action";

const AddNoteButton = () => {
  return (
    <Dialog>
      <form id="note-form" action={addNote}>
        <DialogTrigger asChild>
          <Button variant={"default"}>
            <Pencil size={12} />
            <span>New Note</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>New Note</DialogTitle>
            <DialogDescription>
              Add New Note here. Click Add Note when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Title*</Label>

              <Input
                form="note-form"
                required
                name="title"
                placeholder="Enter Title here"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="content">Content</Label>
              <Textarea
                form="note-form"
                name="content"
                placeholder="Enter Content here"
                className="resize-none h-60"
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" form="note-form">
              Add Note
            </Button>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddNoteButton;
