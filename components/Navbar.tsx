
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./ui/toggle";
import AddNoteButton from "./AddNoteButton";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-5 my-4 mx-4 max-w-full">
        <div className="text-xl font-bold">Glyph</div>
        <div className="flex gap-2 justify-center items-center">
          <AddNoteButton />
          <ModeToggle />
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Navbar;
