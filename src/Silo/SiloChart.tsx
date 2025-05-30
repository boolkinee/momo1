// SiloChart.tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface SiloChartProps {
  entries: {
    timestamp: string;
    weight: number | string;
  }[];
}

export default function SiloChart({ entries }: SiloChartProps) {
  const data = entries.map((entry) => ({
    timestamp: new Date(entry.timestamp).toLocaleTimeString(), // หรือใช้ toLocaleString() ถ้าอยากได้วัน+เวลา
    weight: typeof entry.weight === "string" ? parseFloat(entry.weight) : entry.weight,
  }));

  return (
    <div className="bg-white rounded shadow p-4 mb-6">
      <h2 className="text-lg font-semibold mb-4 text-center">Silo Weight Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" tick={{ fontSize: 10 }} />
          <YAxis label={{ value: "Weight (T)", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Line type="monotone" dataKey="weight" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
