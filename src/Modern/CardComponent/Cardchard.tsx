import { useState } from "react";
import { TEChart } from "tw-elements-react";
import { AppstoreOutlined } from "@ant-design/icons";
import Cartchard1 from "./Cartchard1";



function Cardchard() {
  const [selectedRange, setSelectedRange] = useState("Monthly");

  const earningsData = [
    { label: "Earnings this month", amount: "$48,820" },
    { label: "Expense this month", amount: "$26,498" },
  ];
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRange(e.target.value);
    // คุณสามารถเปลี่ยน chartData ตามค่าที่เลือกได้ที่นี่
  };
  // กำหนดข้อมูลสำหรับ chart
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],

    datasets: [
      {
        label: "Traffic",
        data: [30, 15, 62, 65, 61, 65, 40],
        barThickness: 20,
        borderRadius: 8, // 👈 ปรับความโค้งของมุมแท่งกราฟ
      },
    ],
  };

  // กำหนด options สำหรับ chart
  const chartOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            let label = context.dataset.label || "";
            label = `${label}: ${context.formattedValue} users`;
            return label;
          },
        },
      },
    },
  };

  const darkChartOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            let label = context.dataset.label || "";
            label = `${label}: ${context.formattedValue} users`;
            return label;
          },
        },
      },
      legend: {
        labels: { color: "#fff" },
      },
    },
  };

  return (
    <div className="lg:flex-col xl:flex-row md:flex-col container mx-auto flex py-3 flex-col overflow-auto gap-6">
    <div className="p-6  bg-white rounded-lg shadow-lg w-full h-auto lg:max-w-3xl max-w-full mx-auto">
      <div className="flex justify-between">
        <div className="text-start mb-4">
          <h2 className="text-xl font-medium text-gray-800">Revenue Updates</h2>
          <span className="text-md font-normal">Overview of Profit</span>
        </div>
        <select
          value={selectedRange}
          onChange={handleChange}
          className="border rounded-md text-start md:px-8 px-0 py-3 text-sm"
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
      <div className="md:flex-row flex-col flex gap-6 ">
        <div className="md:w-[450px] w-full h-[300px]">
          <TEChart
            type="bar"
            data={chartData}
            options={{
              ...chartOptions,
              maintainAspectRatio: false,
            }}
            darkOptions={{
              ...darkChartOptions,
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div className="pt-10 flex w-full  flex-col gap-12">
          <div className="flex flex-col items-start gap-3">
            <div className="flex gap-3">
              <AppstoreOutlined className="text-xl p-3 rounded-md bg-[#EEF3FF]" />
              <div className="text-start text-2xl tracking-widest leading-tight">
                $63,489.50
                <br />
                <span className="text-sm text-gray-500">Total Earnings</span>
              </div>
            </div>
            {earningsData.map((item, index) => (
              <div
                key={index}
                className="text-start text-sm pt-5 tracking-widest leading-tight space-y-4" // เพิ่ม space-y-4 ที่นี่
              >
                <div className="flex gap-2 items-start">
                  <span className="w-3 h-3 border rounded-full bg-blue-900 flex items-center justify-center"></span>
                  <div>
                    <p className="text-gray-600">{item.label}</p>
                    <p className="text-xl">{item.amount}</p>
                  </div>
                </div>
              </div>
            ))}
            <button type="button" className="btn-primary">
              View full report
            </button>
          </div>
        </div>
      </div>
    </div>
    <Cartchard1 />
    </div>
  );
}

export default Cardchard;
