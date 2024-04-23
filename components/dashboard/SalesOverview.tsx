import { salesActivity, inventorySummary } from "@/constants/sales.types";
import SalesActivityCard from "./SalesActivityCard";
import InventorySummaryCard from "./InventorySummaryCard";

export default function SalesOverview() {
  return (
    <div className="bg-blue-100 border-b border-slate-300 p-8 grid grid-cols-12 gap-4">
      <div className=" flex flex-col gap-6 col-span-8 border-r border-slate-300">
        <h2>Sales Activity</h2>
        <div className="grid grid-cols-4 gap-4 mr-4 items-center">
          {salesActivity.map((item) => (
            <SalesActivityCard item={item} key={item.title} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 col-span-4">
        <h2>Inventory Summary</h2>
        <div className="space-y-3">
          {inventorySummary.map((i) => (
            <InventorySummaryCard
              title={i.title}
              value={i.value}
              key={i.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
