import HomeNavbar from "@/components/dashboard/HomeNavbar";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <HomeNavbar />
      {children}
    </div>
  );
}
