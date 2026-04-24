import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, } from "@/components/ui/table";


export default function ProductTable({ data }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Source</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>£{item.price.toFixed(2)}</TableCell>
            <TableCell>{item.rating}</TableCell>
            <TableCell>{item.source}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
