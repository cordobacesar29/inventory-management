import { HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from "lucide-react";
import Link from "next/link";

export default function FixedHeader() {
  return (
    <div className="flex justify-between items-center px-5 py-4 bg-white">
      <button className="text-xl">All items</button>
      <div className="flex gap-4 items-center">
        <Link
          href="#"
          className="bg-blue-600 py-1 px-2 flex rounded-md text-slate-50 items-center justify-between"
        >
          <Plus className="text-slate-50 w-4 h-4" />
          <span>New</span>
        </Link>
        <div className="flex items-center rounded-md overflow-hidden">
          <button className="bg-gray-300 p-2 border-r border-gray-400">
            <List className="w-4 h-4" />
          </button>
          <button className="bg-gray-100 p-2">
            <LayoutGrid className="w-4 h-4"/>
          </button>
        </div>
        <button className="bg-gray-100 p-2">
          <MoreHorizontal className="w-4 h-4"/>
        </button>
        <button className="bg-orange-100 text-gray-500 p-2">
          <HelpCircle className="w-4 h-4"/>
        </button>
      </div>
    </div>
  );
}
