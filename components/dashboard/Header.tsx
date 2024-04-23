import {
  BellDot,
  ChevronDown,
  Grid,
  History,
  LayoutGrid,
  Plus,
  Settings,
  User2,
  Users,
} from "lucide-react";
import React from "react";
import InputSearch from "./InputSearch";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-200">
      <div className="flex gap-3">
        <button>
          <History className="w-5 h-5" />
        </button>
        <InputSearch />
      </div>
      <div className="flex items-center gap-3">
        {/* add icon */}
        <div className="pr-2 border-r border-gray-300">
          <button
            data-tooltip-target="tooltip-bottom"
            data-tooltip-placement="bottom"
            type="button"
            className="bg-blue-600 p-1 rounded-lg"
          >
            <Plus className="text-slate-50 w-4 h-4" />
          </button>

          <div
            id="tooltip-bottom"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Tooltip on bottom
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
        {/* buttons section */}
        <div className="flex border-r border-gray-300 space-x-2">
          <button className="p-1 rounded-lg hover:bg-slate-200">
            <Users className="text-slate-900 w-4 h-4" />
          </button>
          <button className="p-1 rounded-lg hover:bg-slate-200">
            <BellDot className="text-slate-900 w-4 h-4" />
          </button>
          <button className="p-1 rounded-lg hover:bg-slate-200">
            <Settings className="text-slate-900 w-4 h-4" />
          </button>
        </div>
        {/* Search */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2">
            <span>Garant</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button>
            <Image
              alt=""
              src={"/rocket-dynamic-color.png"}
              width={96}
              height={96}
              className="rounded-full h-8 w-8 border border-slate-400"
            />
          </button>
          <button>
            <LayoutGrid className="w-6 h-6 text-slate-900"/>
          </button>
        </div>
        {/* Search */}
      </div>
    </div>
  );
}
