import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <h1 className="text-3xl font-bold underline font-barlow">Home Page</h1>
      <ThemeToggle />
      <div className="grid place-content-center">
        <UserButton />
      </div>
    </>
  );
}
