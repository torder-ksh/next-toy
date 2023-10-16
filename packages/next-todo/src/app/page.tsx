import Link from "next/link";
import Button from "./common/Button";
import { cookies } from "next/headers";

export default function Home() {
  return (
    <div>
      <Link href={"/todo"}>Todo</Link>
    </div>
  );
}
