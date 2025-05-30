import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SettingOutlined } from "@ant-design/icons";
import SiloTank from "./Silo";
import { ChevronRight } from "lucide-react";

interface PrettySiloCardProps {
  id: string;
  range: string;
  percent: number;
}

export default function PrettySiloCard({ id, range, percent }: PrettySiloCardProps) {
  const navigate = useNavigate();

  const [temp, setTemp] = useState("-- °C");
  const [humidity, setHumidity] = useState("-- %");
  const [weight, setWeight] = useState("0.00 T");
  const [depth, setDepth] = useState(`${(percent / 100) * 10} m`);

  useEffect(() => {
    const saved = localStorage.getItem(`silo-${id}`);
    if (saved) {
      try {
        const entries = JSON.parse(saved);
        const latest = entries[entries.length - 1];

        if (latest) {
          // แปลงข้อมูลและตรวจสอบให้แน่ใจว่าเป็นตัวเลข
          const tempVal = parseFloat(latest.temp);
          const humidityVal = parseFloat(latest.humidity);
          const weightVal = parseFloat(latest.weight);
          const percentVal = parseFloat(latest.percent);

          setTemp(!isNaN(tempVal) ? `${tempVal.toFixed(1)} °C` : "-- °C");
          setHumidity(!isNaN(humidityVal) ? `${humidityVal.toFixed(1)} %` : "-- %");
          setWeight(!isNaN(weightVal) ? `${(weightVal / 1000).toFixed(2)} T` : "0.00 T");
          setDepth(!isNaN(percentVal) ? `${(percentVal / 100 * 10).toFixed(1)} m` : "-- m");

          // ส่งข้อมูลเฉพาะเมื่อข้อมูล valid เท่านั้น
          if (
            !isNaN(tempVal) &&
            !isNaN(humidityVal) &&
            !isNaN(weightVal) &&
            !isNaN(percentVal)
          ) {
            sendDataToBackend({
              silo_id: id,
              temperature: tempVal,
              humidity: humidityVal,
              weight: weightVal,
              percent: percentVal,
            });
          } else {
            console.warn("Invalid data found in localStorage, skip sending", latest);
          }
        }
      } catch (err) {
        console.error("Error loading silo data:", err);
      }
    }
  }, [id]);

  const sendDataToBackend = async (payload: any) => {
    console.log("Sending to backend:", payload);  // เพิ่ม log เพื่อตรวจสอบ payload
    try {
      const res = await fetch("http://localhost:3001/api/silos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("Data saved:", data);
    } catch (error) {
      console.error("Failed to send data:", error);
    }
  };

  const goToSettings = () => navigate(`/settings/${id}`);
  const goToDetail = () => navigate(`/silo/${id}/detail`);

  return (
    <div className="max-w-xs w-full h-[220px] mx-auto bg-white rounded-2xl shadow-md hover:shadow-lg transition p-0 overflow-hidden">
      <div className="flex items-center justify-between bg-gray-50 px-4 py-2 border-b">
        <button onClick={goToSettings}>
          <SettingOutlined className="text-gray-600 hover:text-blue-500" />
        </button>
        <div className="text-sm font-semibold text-gray-700">{id}</div>
        <button onClick={goToDetail} className="p-1 rounded-full hover:bg-gray-200">
          <ChevronRight className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="px-4 py-1">
        <span className="text-xs text-gray-500">{range}</span>
      </div>

      <div className="flex gap-8 px-4 items-center my-auto">
        <div className="pt-4 border rounded-b-full">
          <SiloTank percent={percent} />
        </div>
        <div className="gap-3 w-full flex flex-col">
          <StatLabel label="Temp" value={temp} />
          <StatLabel label="Humidity" value={humidity} />
          <StatLabel label="Depth" value={depth} />
          <StatLabel label="Weight" value={weight} />
        </div>
      </div>
    </div>
  );
}

function StatLabel({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between w-full text-sm">
      <span className="text-gray-600">{label}:</span>
      <span className="ml-auto font-medium text-gray-800">{value}</span>
    </div>
  );
}
