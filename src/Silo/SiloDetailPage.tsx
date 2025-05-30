import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import SiloTank from "./Silo"; // หรือ "./SiloTank" แล้วแต่โฟลเดอร์

export default function SiloDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [entries, setEntries] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(`silo-${id}`);
    if (stored) {
      setEntries(JSON.parse(stored));
    }
  }, [id]);

  return (
    <div className="p-6 max-w-4xl mx-auto ">
      <h1 className="text-2xl font-bold  text-center mt-6">Silo History: {id}</h1>
      <br/>
      <br/>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3  ">
        {entries.length > 0 ? (
          entries
            .slice()
            .reverse() // ล่าสุดขึ้นก่อน
            .map((entry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-4 border border-gray-100"
              >
                <div className="text-sm text-gray-500 mb-2">
                  {new Date(entry.timestamp).toLocaleString()}
                </div>
                <div className="flex gap-6 items-center">
                  <div className="pt-2">
                    <SiloTank percent={entry.percent} />
                  </div>
                  <div className="flex flex-col gap-1 text-sm w-full">
                    <Stat label="Percent" value={`${entry.percent}%`} />
                    <Stat label="Temp" value={`${entry.temp} °C`} />
                    <Stat label="Humidity" value={`${entry.humidity} %`} />
                    <Stat label="Weight" value={`${entry.weight} T`} />
                  </div>
                </div>
              </div>
            ))
        ) : (
          <p className="text-center text-gray-500">No data found.</p>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between w-full">
      <span className="text-gray-600">{label}:</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
