import ProductTable from "@/components/ProductTable";
import SalesChart from "@/components/SalesChart";
import { fetchProducts } from "@/services/api";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";


export default function Dashboard({ darkMode, setDarkMode }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchProducts({ limit: 100 });
        setProducts(res);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const ratingGrouped = {};

  products.forEach((item) => {
    const rating = item.rating;
    ratingGrouped[rating] = (ratingGrouped[rating] || 0) + 1;
  });

  const chartData = Object.keys(ratingGrouped).map((rating) => ({
    name: `⭐ ${rating}`,
    value: ratingGrouped[rating],
  }));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!products.length) return <p>No data available</p>;

  return (
    <div className="max-w-full mx-auto w-full">
      <div className="flex flex-col md:flex-row gap-6">
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="bg-background flex-1 p-6 pl-0 space-y-6">
          {/* Chart */}
          <div className="bg-card  p-4 rounded-xl shadow">
            <h2 className="font-semibold text-foreground! mb-4">
              Rating Distribution
            </h2>
            <p className="text-sm text-muted-foreground">
              Rata-rata harga produk berbeda di setiap platform, dengan platform
              tertentu memiliki harga lebih tinggi.
            </p>
            <SalesChart data={chartData} />
          </div>

          {/* Table */}
          <div className="bg-card  p-4 rounded-xl shadow">
            <h2 className="font-semibold text-foreground! mb-4">
              Product List
            </h2>
            <ProductTable data={products} />
          </div>
        </div>
      </div>
    </div>
  );
}
