import { ISalesActivity } from "@/constants/sales.types";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  item: ISalesActivity;
}
export default function SalesActivityCard({ item }: Props) {
  return (
    <Link
      href={item.href}
      className="sales-activity-card shadow rounded-lg border border-slate-200 hover:border-blue-400"
    >
      <h4 className={`font-semibold text-3xl ${item.color}`}>{item.value}</h4>
      <small className="text-slate-500">{item.unit}</small>
      <div className="flex items-center space-x-2 text-slate-500">
        <CheckCircle2 className="w-4 y-4" />
        <span className="uppercase text-xs">{item.title}</span>
      </div>
    </Link>
  );
}
