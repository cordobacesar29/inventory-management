import Link from "next/link";
import React from "react";

export interface IOptionsCard {
  title: string;
  icon: React.ReactNode;
  subject: string;
  buttonLabel: string;
  href: string;
}
export default function ItemOptionsCard({
  buttonLabel,
  href,
  icon,
  subject,
  title,
}: IOptionsCard) {
  return (
    <div className="shadow-xl rounded-lg bg-white flex flex-col items-center justify-center p-4 gap-4">
      <h2>{title}</h2>
      <div>
        {icon}
      </div>
      <p className="line-clamp-1">
        {subject}
      </p>
      <Link
        href={href}
        className="bg-blue-600 py-1 px-2 rounded-md text-slate-50 w-fit"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}
