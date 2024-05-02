import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  href: string;
}
export default function FormHeader({ href, title }: Props) {
  return (
    <div className=" bg-white flex justify-between items-center p-4">
      <h2 className="text-semibold text-xl">{title}</h2>
      <Link href={href}>
        <X />
      </Link>
    </div>
  );
}
