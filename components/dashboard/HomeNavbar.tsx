"use client";
import { ROUTES } from "@/constants/routes";
import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeNavbar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="h-32 p-5 header-bg bg-slate-50 border-b border-slate-300">
      <div className="flex space-x-3">
        <div className="flex w-12 h-12 bg-white rounded-lg items-center justify-center ">
          <Building2 />
        </div>
        <div className="flex flex-col">
          <p className="text-slate-700 font font-semibold">Hello, cesarDev</p>
          <span className="text-sm">Garat</span>
        </div>
      </div>
      <nav className="sticky mt-6 space-x-4">
        {navLinks.map((item) => {
          return (
            <Link
              key={item.title}
              href={item.href}
              className={`py-3 ${
                pathname === item.href ? "border-b-2 border-blue-600" : ""
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
const navLinks = [
  {
    title: "Dashboard",
    href: ROUTES.dashboard,
  },
  {
    title: "Getting Started",
    href: ROUTES.gettingStarted,
  },
  {
    title: "Recent Updates",
    href: ROUTES.updates,
  },
  {
    title: "Announcements",
    href: ROUTES.announcements
  },
];
