export default function InventorySummaryCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="shadow rounded-lg border border-slate-200 hover:border-blue-400 flex justify-between bg-white p-4 items-center">
      <h2 className=" text-slate-500 uppercase text-sm">{title}</h2>
      <h4 className="text-2xl">{value}</h4>
    </div>
  );
}
