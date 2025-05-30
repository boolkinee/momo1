import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const maxWeightKg = 10000;

interface SiloTankProps {
  percent: number;
}

const SiloTank: React.FC<SiloTankProps> = ({ percent }) => {
  const clampPercent = Math.max(0, Math.min(100, percent));

  return (
    <div className="flex flex-col items-center">
      <svg width="60" height="140" viewBox="0 0 60 140">
        <rect
          x="0"
          y={140 - clampPercent * 1.2}
          width="60"
          height={clampPercent * 1.2}
          fill="#ef4444"
        />
        <text x="30" y="70" textAnchor="middle" fontSize="14" fill="#000">
          {clampPercent.toFixed(1)}%
        </text>
      </svg>
    </div>
  );
};

export default function SettingsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [weight, setWeight] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(`silo-${id}`);
    if (saved) {
      try {
        const entries = JSON.parse(saved);
        const latest = entries[entries.length - 1];
        if (latest) {
          setWeight(latest.weight?.toString() || "");
          setTemp(latest.temp?.toString() || "");
          setHumidity(latest.humidity?.toString() || "");
          const weightNum = parseFloat(latest.weight);
          if (!isNaN(weightNum)) {
            setPercent((weightNum / maxWeightKg) * 100);
          }
        }
      } catch (err) {
        console.error("Error parsing localStorage:", err);
      }
    }
  }, [id]);

  useEffect(() => {
    const weightNum = parseFloat(weight);
    if (!isNaN(weightNum)) {
      setPercent((weightNum / maxWeightKg) * 100);
    }
  }, [weight]);

  const handleSave = async () => {
  const newEntry = {
    percent,
    temp: parseFloat(temp),
    humidity: parseFloat(humidity),
    weight: parseFloat(weight),
    timestamp: new Date().toISOString(),
    silo_id: id,
  };

  try {
    const res = await fetch("/silo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    });

    if (!res.ok) {
      const errorText = await res.text(); // อ่านข้อความ error จาก backend
      throw new Error(errorText || "Failed to save data to server");
    }

    // อัปเดต localStorage
    const existing = localStorage.getItem(`silo-${id}`);
    const history = existing ? JSON.parse(existing) : [];
    const updated = Array.isArray(history)
      ? [...history, newEntry]
      : [newEntry];
    localStorage.setItem(`silo-${id}`, JSON.stringify(updated));

    alert("✅ Save successful!");
    navigate(`/silo/${id}/detail`);
  } catch (err: any) {
    console.error("Failed to save:", err);
    alert("❌ Save failed: " + err.message);
  }
};

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">Settings for Silo: {id}</h1>

      <div className="mb-6 flex justify-center">
        <SiloTank percent={percent} />
      </div>

      <div className="space-y-4">
        <label className="block">
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border w-full rounded px-3 py-1"
          />
        </label>

        <label className="block">
          Temp (°C):
          <input
            type="text"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            className="border w-full rounded px-3 py-1"
          />
        </label>

        <label className="block">
          Humidity (%):
          <input
            type="text"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
            className="border w-full rounded px-3 py-1"
          />
        </label>

        <div className="flex justify-center mt-10">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
