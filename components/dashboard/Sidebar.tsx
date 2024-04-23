import {
  BaggageClaim,
  BarChart4,
  Blocks,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Home,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import SubscriptionCard from "./SubscriptionCard";

export default function Sidebar() {
  return (
    <div className="flex">
      <div className="flex flex-col w-60 min-h-screen bg-slate-800 text-slate-50 justify-between fixed">
        <div className="flex flex-col">
          <div className="bg-slate-950 flex space-x-2 items-center py-3 px-2">
            <BaggageClaim />
            <span className="font-semibold text-xl">Inventory</span>
          </div>
          <nav className="flex flex-col gap-6 p-3">
            <Link href={""} className="flex items-center space-x-2">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <button className="flex items-center space-x-2 justify-between">
              <div className="flex items-center space-x-2">
                <BaggageClaim className="w-4 h-4" />
                <span>Inventory</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="flex items-center space-x-2 justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-4 h-4" />
                <span>Sales</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="flex items-center space-x-2 justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Purchases</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>
            <Link href={""} className="flex items-center space-x-2">
              <Blocks className="w-4 h-4" />
              <span>Integrations</span>
            </Link>
            <Link href={""} className="flex items-center space-x-2">
              <BarChart4 className="w-4 h-4" />
              <span>Reports</span>
            </Link>
            <Link href={""} className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>Documents</span>
            </Link>
          </nav>
          <SubscriptionCard />
        </div>
        <div>
          <div className="flex flex-col">
            <button className="bg-slate-950 flex space-x-2 items-center justify-center py-3 px-2">
              <ChevronLeft />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
