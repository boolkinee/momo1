import { ArrowUpOutlined } from "@ant-design/icons";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import Ecommerce2 from "./Ecommerce2";

import Recharts from "./Recharts";
import RecentTransactions from "./RecentTransactions";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const DashboardCard = () => {
  const doughnutData = {
    labels: ["Blue", "Orange", "Light Blue"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#4A90E2", "#F5A623", "#B5D6F0"],
        hoverOffset: 4,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const barData = {
    labels: ["Low", "Medium", "High"],
    datasets: [
      {
        data: [10, 30, 60],
        backgroundColor: ["#7EB6FF", "#4A90E2", "#1F3BB3"],
        borderRadius: 4,
        barThickness: 20,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="flex flex-col w-full gap-10 pl-15">
      {/* กล่องหลักและกราฟวงกลม/แท่ง */}
      <div className="max-w-6xl flex-[3] flex flex-col md:flex-row flex-nowrap justify-start items-start gap-6">
        {/* การ์ดหลัก */}
        <div
          className="bg-[#EEF3FF] w-full max-w-[800px] h-[250px] bg-no-repeat bg-cover rounded-md shadow-xl p-6"
          style={{
            backgroundImage: "url('/welcome-bg.svg')",
            backgroundPosition: "170px 0px",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="flex items-center gap-4 pl-6 pt-6">
            <img
              src="/user-1.jpg"
              alt="Mathew"
              className="w-12 h-12 rounded-full object-cover shadow-md"
              style={{ marginLeft: "-20px", marginTop: "-20px" }}
            />
            <h2 className="text-lg font-bold text-black">
              Welcome back Mathew Anderson!
            </h2>
          </div>

          <div className="flex items-center gap-6 mt-8 ml-10">
            <div
              className="flex flex-col"
              style={{ marginTop: "30px", marginLeft: "30px" }}
            >
              <h3 className="text-3xl font-bold text-gray-800 flex items-center">
                $2,340{" "}
                <ArrowUpOutlined
                  style={{
                    fontSize: "18px",
                    transform: "rotate(40deg)",
                    marginLeft: "20px",
                    color: "green",
                  }}
                />
              </h3>
              <p className="text-black text-sm">Today’s Sales</p>
            </div>

            <span
              className="text-gray-300 text-2xl"
              style={{ marginTop: "30px" }}
            >
              |
            </span>

            <div className="flex flex-col">
              <h3
                className="text-2xl font-semibold text-gray-800 flex items-center"
                style={{ marginTop: "30px" }}
              >
                35%
                <ArrowUpOutlined
                  style={{
                    fontSize: "18px",
                    transform: "rotate(40deg)",
                    marginLeft: "8px",
                    color: "green",
                  }}
                />
              </h3>
              <p className="text-black text-sm">Overall Performance</p>
            </div>
          </div>
        </div>

        {/* กล่องที่สอง */}
        <div className="flex flex-col bg-white w-full  md:w-[166px] h-[250px] rounded-md shadow-xl p-4 items-center justify-center">
          <h3 className="text-lg font-bold text-black">$10,230</h3>
          <p className="text-gray-500 text-sm mb-2">Expense</p>
          <div className="w-[100px] h-[100px]">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>

        {/* กล่องที่สาม */}
        <div className="flex flex-col bg-white w-full md:w-[166px] h-[250px] rounded-md shadow-xl p-4 items-center justify-center">
          <h3 className="text-lg font-bold text-black">$65,432</h3>
          <p className="text-gray-500 text-sm mb-2">Sales</p>
          <div className="w-full h-[80px]">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>       
      </div>
         
    <Ecommerce2/>
    <Recharts/>
    
    </div>
  );
};

export default DashboardCard;
