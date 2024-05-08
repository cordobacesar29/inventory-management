import FixedHeader from "@/components/dashboard/FixedHeader";
import ItemOptionsCard, {
  IOptionsCard,
} from "@/components/dashboard/ItemOptionsCard";
import { ROUTES } from "@/constants/routes";
import { Boxes, Component, ScrollText, Shirt } from "lucide-react";

export default function Inventory() {
  return (
    <div>
      <FixedHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2 py-8 px-16 gap-6">
        {itemCardOptions.map((el) => (
          <ItemOptionsCard
            buttonLabel={el.buttonLabel}
            href={el.href}
            icon={el.icon}
            subject={el.subject}
            title={el.title}
            key={el.title}
          />
        ))}
      </div>
    </div>
  );
}

const itemCardOptions: IOptionsCard[] = [
  {
    title: "Item",
    subject: "Create standalone items and services and you buy and sell",
    href: "#",
    buttonLabel: "New Item",
    icon: <Shirt className="w-36 h-36" />,
  },
  {
    title: "Categories",
    subject: "Create multiple variants of the same item using Item Groups",
    href: ROUTES.newCategory,
    buttonLabel: "New Category",
    icon: <Boxes className="w-36 h-36" />,
  },
  {
    title: "Brands",
    subject: "Bundle different items together and sell them as kits",
    href: ROUTES.newBrand,
    buttonLabel: "New Brand",
    icon: <Component className="w-36 h-36" />,
  },
  {
    title: "Warehouse",
    subject: "Tweak your item prices for specific contacts or transactions",
    href: ROUTES.newWarehouse,
    buttonLabel: "New Warehouse",
    icon: <ScrollText className="w-36 h-36" />,
  },
  {
    title: "Units",
    subject: "Tweak your item prices for specific contacts or transactions",
    href: ROUTES.newUnit,
    buttonLabel: "New Unit",
    icon: <ScrollText className="w-36 h-36" />,
  },
  {
    title: "Adjustments",
    subject: "Transfer stcok from the Main warehouse",
    href: ROUTES.newAdjustment,
    buttonLabel: "New Adjustment",
    icon: <ScrollText className="w-36 h-36" />,
  },
];
