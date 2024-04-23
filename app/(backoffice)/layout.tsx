import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar/>
      <main className="ml-60 w-full bg-slate-100 max-h-screen">
        <Header />
        {children}
      </main>
    </div>
  );
}
