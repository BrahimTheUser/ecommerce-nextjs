import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <h1 className="text-3xl font-bold underline font-barlow">Home 2</h1>
      <Button variant="destructive">Click here</Button>
    </>
  );
}
