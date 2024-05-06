import {
  BaggageClaim,
  BarChart4,
  Blocks,
  BookOpen,
  ChevronLeft,
  Home,
  PlusCircle,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import SubscriptionCard from "./SubscriptionCard";
import AccordionCustome from "./AccordionCustome";
import { ROUTES } from "@/constants/routes";
import SidebarLink from "./SidebarLink";

export interface ItemLinkType {
  href: string;
  label: string;
  icon?: React.ReactNode;
}
export default function Sidebar() {
  return (
    <div className="flex">
      <div className="flex flex-col w-60 min-h-screen bg-slate-800 text-slate-50 justify-between fixed">
        <div className="flex flex-col">
          <div className="bg-slate-950 flex space-x-2 items-center py-3 px-2">
            <BaggageClaim />
            <span className="font-semibold text-xl">Inventory</span>
          </div>
          <nav className={`flex flex-col gap-6 p-3`}>
            <SidebarLink
              icon={<Home className="w-4 h-4" />}
              label="Home"
              route={ROUTES.dashboard}
            />
            <AccordionCustome
              accordionLabel="Inventory"
              accordionIcon={<BaggageClaim className="w-4 h-4" />}
              items={inventoryItems}
            />
            <AccordionCustome
              accordionLabel="Sales"
              accordionIcon={<ShoppingCart className="w-4 h-4" />}
              items={salesItems}
            />
            <AccordionCustome
              accordionLabel="Purchases"
              accordionIcon={<ShoppingBag className="w-4 h-4" />}
              items={[]}
            />
            <SidebarLink
              icon={<Blocks className="w-4 h-4" />}
              label="Integrations"
              route={ROUTES.integrations}
            />
            <SidebarLink
              icon={<BarChart4 className="w-4 h-4" />}
              label="Reports"
              route={ROUTES.reports}
            />
            <SidebarLink
              icon={<BookOpen className="w-4 h-4" />}
              label="Documents"
              route={ROUTES.documents}
            />
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
const inventoryItems: ItemLinkType[] = [
  {
    href: ROUTES.newItem,
    icon: <PlusCircle className=" w-4 h-4" />,
    label: "Items",
  },
  {
    href: ROUTES.newCategory,
    icon: <PlusCircle className=" w-4 h-4" />,
    label: "Categories",
  },
  {
    href: ROUTES.newBrand,
    icon: <PlusCircle className=" w-4 h-4" />,
    label: "Brands",
  },
  {
    href: ROUTES.newUnit,
    icon: <PlusCircle className=" w-4 h-4" />,
    label: "Units",
  },
  {
    href: ROUTES.newWarehouse,
    icon: <PlusCircle className=" w-4 h-4" />,
    label: "Warehouse",
  },
];

export const salesItems: ItemLinkType[] = [
  {
    href: "#",
    label: "Sales",
  },
  {
    href: "#",
    label: "Customers",
  },
  {
    href: "#",
    label: "Sales Ordes",
  },
  {
    href: "#",
    label: "Packages",
  },
  {
    href: "#",
    label: "Shipments",
  },
  {
    href: "#",
    label: "Invoices",
  },
  {
    href: "#",
    label: "Credit Notes",
  },
  {
    href: "#",
    label: "Payments Received",
  },
  {
    href: "#",
    label: "Sales Returns",
  },
  {
    href: "#",
    label: "Sales Receipts",
  },
];
