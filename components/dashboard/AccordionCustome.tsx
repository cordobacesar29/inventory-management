"use client";
import Link from "next/link";
import { ItemType } from "./Sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { usePathname } from "next/navigation";

export interface IAccordion {
  accordionLabel: string;
  accordionIcon: React.ReactNode;
  items: ItemType[];
}

export default function AccordionCustome({
  accordionIcon,
  accordionLabel,
  items,
}: IAccordion) {
  const pathname = usePathname();
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="border-none p-0 py-0">
        <AccordionTrigger className="p-0 mb-2">
          <div className="flex items-center space-x-2">
            {accordionIcon}
            <span>{accordionLabel}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-0 space-y-1">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={` ${
                pathname === item.href ? "bg-slate-900" : ""
              } flex justify-between py-2 px-1 hover:bg-slate-900 transition-all duration-300 rounded-md`}
            >
              <span className="text-sm">{item.label}</span>
              {item.icon ? item.icon : null}
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
