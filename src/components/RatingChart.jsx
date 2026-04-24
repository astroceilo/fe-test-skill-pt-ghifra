import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, } from "recharts";


export default function RatingChart({ data }) {
  return (
    <div className="h-80 mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
