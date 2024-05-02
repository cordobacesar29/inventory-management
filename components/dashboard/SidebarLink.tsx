"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  route: string;
  icon: React.ReactNode;
  label: string;
}

export default function SidebarLink({ icon, label, route }: Props) {
  const pathname = usePathname();
  return (
    <Link
      href={route}
      className={`${
        pathname === route ? "bg-slate-900" : ""
      } flex items-center space-x-2`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
