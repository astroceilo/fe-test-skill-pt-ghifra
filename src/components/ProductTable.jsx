import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, } from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";


export default function ProductTable({ data }) {
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    setPage(1);
  }, [sortKey, sortOrder]);

  const limit = 10;

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const start = (page - 1) * limit;
  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;

    if (typeof a[sortKey] === "string") {
      return sortOrder === "asc"
        ? a[sortKey].localeCompare(b[sortKey])
        : b[sortKey].localeCompare(a[sortKey]);
    }

    return sortOrder === "asc"
      ? a[sortKey] - b[sortKey]
      : b[sortKey] - a[sortKey];
  });
  // const paginatedData = data.slice(start, start + limit);
  const paginatedData = sortedData.slice(start, start + limit);

  const renderSortIcon = (key) => {
    if (sortKey !== key) return "↕";
    return sortOrder === "asc" ? "↑" : "↓";
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "text-muted-foreground"
        }
      />
    ));
  };

  return (
    <>
      {/* Table Component */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            {/* <TableHead>Product Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Rating</TableHead> */}
            <TableHead
              onClick={() => handleSort("name")}
              className="cursor-pointer hover:text-foreground transition"
            >
              Product Name {renderSortIcon("name")}
            </TableHead>

            <TableHead
              onClick={() => handleSort("price")}
              className="cursor-pointer hover:text-foreground transition"
            >
              Price {renderSortIcon("price")}
            </TableHead>

            <TableHead
              onClick={() => handleSort("rating")}
              className="cursor-pointer hover:text-foreground transition"
            >
              Rating {renderSortIcon("rating")}
            </TableHead>
            <TableHead>Source</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{start + index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>£{item.price.toFixed(2)}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="flex">{renderStars(item.rating)}</div>
                  <span className="text-sm text-muted-foreground">
                    ({item.rating})
                  </span>
                </div>
              </TableCell>
              <TableCell>{item.source}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Component */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          Prev
        </button>

        <span className="text-sm">
          Page {page} of {Math.ceil(data.length / limit)}
        </span>

        <button
          onClick={() =>
            setPage((p) => (p < Math.ceil(data.length / limit) ? p + 1 : p))
          }
          className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          Next
        </button>
      </div>
    </>
  );
}
