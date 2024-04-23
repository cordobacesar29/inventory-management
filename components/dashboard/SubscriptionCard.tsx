import Link from "next/link";
import React from "react";

export default function SubscriptionCard() {
  return (
    <div className=" px-2 py-3">
    <div className="p-3 rounded-lg mt-6 bg-slate-900">
      <div className="border-b border-slate-600 pb-2">
        <p className="text-sm border-l-2 border-orange-400 pl-2">
          Your Premium plan's trial expire in {""}
          <span className="text-orange-400 text-sm">13 days</span>
        </p>
      </div>
      <div className="flex space-x-3 pt-2 text-sm">
        <button className="mr-2 border-r border-slate-600 pr-4">Change Plan</button>
        <Link href={"#"}>Upgrade</Link>
      </div>
    </div>
    </div>
  );
}
