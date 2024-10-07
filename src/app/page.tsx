import Image from "next/image";
import NotesHome from "./notes/page";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Welcome to notes
      <Link href={"/notes"}>notes</Link>
    </div>
  );
}
