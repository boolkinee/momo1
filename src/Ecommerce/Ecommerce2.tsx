import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { LineChartOutlined } from "@ant-design/icons";

import type { ChartOptions } from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  Filler
);

const SalesCard = () => {
  const miniBarData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [4, 5, 3, 6, 5, 4, 6],
        backgroundColor: "#4A90E2",
        borderRadius: 4,
        barThickness: 10,
      },
    ],
  };

  const miniBarOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

return (
  <div className="rounded-xl shadow-md p-3 bg-white w-44">
    <div className="p-1.5 bg-indigo-100 rounded-full inline-block mb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 7h13L17 13M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
        />
      </svg>
    </div>
    <div className="w-full h-[100px]">
      <Bar data={miniBarData} options={miniBarOptions} />
    </div>
    <h4 className="text-base font-semibold mt-1">
      $16.5k <span className="text-green-500 text-xs">↑</span>
    </h4>
    <p className="text-xs text-gray-500">Sales</p>
  </div>
);
};

const GrowthCard = () => {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Growth",
        data: [12, 15, 18, 20, 22, 24],
        fill: true,
        backgroundColor: "rgba(179, 212, 252, 0.2)",
        borderColor: "#4A90E2",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const lineOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

 return (
    <div className="rounded-xl shadow-md p-3 bg-white w-44">
      <div className="p-1.5 bg-indigo-100 rounded-full inline-block mb-2">
        <LineChartOutlined className="text-indigo-600 text-lg" />
      </div>
      <div className="w-full h-[100px]">
        <Line data={lineData} options={lineOptions} />
      </div>
      <h4 className="text-base font-semibold mt-1">
        24% <span className="text-green-500 text-xs">↑</span>
      </h4>
      <p className="text-xs text-gray-500">Growth</p>
    </div>
  );
};
const EarningsCard = () => {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Earnings",
        data: [5200, 5400, 5800, 6100, 6550, 6820],
        fill: true,
        backgroundColor: "rgba(179, 212, 252, 0.2)",
        borderColor: "#4A90E2",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const lineOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <div className="rounded-2xl shadow-md p-4 bg-white w-[350px]">
      <div className="p-2 bg-indigo-100 rounded-full inline-block mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z"
          />
        </svg>
      </div>
      <div className="w-[300px] h-[120px]">
        <Line data={lineData} options={lineOptions} />
      </div>
      <h4 className="text-xl font-semibold mt-2">
        $6,820 <span className="text-green-500 text-sm">+9%</span>
      </h4>
      <p className="text-sm text-gray-500">Monthly Earnings</p>
    </div>
  );
};

const Ecommerce2 = () => {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Footwear",
        data: [1200, 1920, 1210, 2000, 1600, 2002],
        backgroundColor: "#4A90E2",
        borderRadius: 6,
        barThickness: 18,
      },
      {
        label: "Fashionware",
        data: [800, 501, 900, 630, 400, 605],
        backgroundColor: "#B3D4FC",
        borderRadius: 6,
        barThickness: 18,
      },
    ],
  };

  const barOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#6B7280",
          boxWidth: 12,
        },
      },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#9CA3AF" },
      },
      y: {
        beginAtZero: true,
        grid: { color: "#E5E7EB" },
        ticks: { color: "#9CA3AF" },
      },
    },
  };

  const doughnutData = {
    labels: ["Profit", "Expense"],
    datasets: [
      {
        data: [23450, 23450],
        backgroundColor: ["#4A90E2", "#B3D4FC"],
        hoverOffset: 6,
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="flex flex-row gap-6 mt-6 mb-8 w-full h-full ">
      <div className="bg-white w-[350px] h-[450px] rounded-md shadow-xl p-6 flex flex-col">
        <h3 className="text-lg font-bold text-black mb-1">Revenue Updates</h3>
        <p className="text-sm text-gray-500 mb-2">Overview of Profit</p>
        <div className="flex-1 w-full">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>

      <div className="bg-white w-[400px] h-[450px] rounded-md shadow-xl p-6 flex flex-col items-center gap-6">
        <h3 className="text-lg font-bold text-black mb-1 text-center">
          Sales Overview
        </h3>
        <p className="text-sm text-gray-500 mb-4 text-center">Every Month</p>
        <div className="w-full h-[240px] flex justify-center items-center">
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
        <div className="flex justify-around w-full mt-4">
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500">Profit</p>
            <h3 className="text-lg font-bold text-[#4A90E2]">$23,450</h3>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500">Expense</p>
            <h3 className="text-lg font-bold text-[#B3D4FC]">$23,450</h3>
          </div>
        </div>
      </div>

<div>
  <div className="flex space-x-4">
    <SalesCard />
    <GrowthCard />
  </div>

  <div className="mt-10 hover:scale-105 transition-transform duration-300">
    <EarningsCard />
  </div>
</div>
      </div>
    
  );
};

export default Ecommerce2;
