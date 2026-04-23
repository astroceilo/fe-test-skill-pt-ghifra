import ProductTable from "@/components/ProductTable";
import SalesChart from "@/components/SalesChart";
import Sidebar from "@/components/Sidebar";


export default function Dashboard() {
  const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 space-y-6">
        {/* Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Sales Overview</h2>
          <SalesChart data={data} />
        </div>

        {/* Table */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Product List</h2>
          <ProductTable data={data} />
        </div>
      </div>
    </div>
  );
}
