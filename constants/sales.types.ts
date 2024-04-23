export interface ISalesActivity {
  title: string
  value: number
  unit: string
  href: string
  color: string
}
export const inventorySummary = [
  {
    title: "quantity in hand",
    value: 10,
  },
  {
    title: "quantity to recieved",
    value: 0,
  },
];

export const salesActivity: ISalesActivity[] = [
  {
    title: "To be PAcked",
    value: 10,
    unit: "Qty",
    href: "#",
    color: "text-blue-600",
  },
  {
    title: "To be Shipped",
    value: 0,
    unit: "Pkgs",
    href: "#",
    color: "text-red-600",
  },
  {
    title: "To be delivered",
    value: 10,
    unit: "Pkgs",
    href: "#",
    color: "text-green-600",
  },
  {
    title: "To be invoiced",
    value: 10,
    unit: "Qty",
    href: "#",
    color: "text-yellow-600",
  },
];
