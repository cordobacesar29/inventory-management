"use client";
import { CreditCard, X } from "lucide-react";
import React, { useState } from "react";

export default function DashboardBanner() {
  const [hidden, setHidden] = useState<boolean>(false);
  return (
    <div
      className={`flex justify-between items-center py-6 px-16 bg-white gap-4 relative ${
        hidden ? "hidden" : ""
      }`}
    >
      <CreditCard className="w-16 h-16 text-slate-500" />
      <div className="flex flex-col gap-2 w-2/3">
        <h2 className="font-bold text-2xl">Start accepting onli payments</h2>
        <p className="">
          {`Businesses are moving toward online payments as they're easey, secure
          andy fast. Try them for your business today.`}
        </p>
      </div>
      <button className="py-2.5 px-8 uppercase bg-blue-700 text-white rounded-lg">
        Enable
      </button>
      <button
        onClick={() => setHidden(true)}
        className="absolute top-4 right-4"
      >
        <X />
      </button>
    </div>
  );
}
