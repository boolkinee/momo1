import { TEChart } from "tw-elements-react";
import { ArrowUpOutlined } from "@ant-design/icons";
function Cartchard1() {
  return (
    <div className="flex flex-col gap-3  ">
      <div className="flex items-center justify-between h-[200px] bg-white p-8 rounded-lg shadow-md  lg:w-[368px] w-full ">
        <div className="text-left flex flex-col gap-4">
          <h3 className="text-lg font-normal text-gray-800">Yearly Breakup</h3>
          <p className="text-xl text-black">$36,358</p>
          <div className="flex gap-2 items-center">
            <span className="border rounded-full p-2 w-2 h-2 flex items-center justify-center -rotate-30 bg-green-300">
              <ArrowUpOutlined className="text-xs" />
            </span>
            <p className="text-sm text-black">+9% last year</p>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <span className="w-3 h-3 border rounded-full bg-blue-900"></span>
              <p>2024</p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-3 h-3 border rounded-full bg-gray-500"></span>
              <p>2024</p>
            </div>
          </div>
        </div>

        {/* Doughnut chart */}
        <div className="w-[100px] h-[100px]">
          <TEChart
            type="doughnut"
            data={{
              datasets: [
                {
                  label: "Traffic",
                  data: [2112, 2343],
                  backgroundColor: ["#2563EB", "rgba(77, 182, 172, 0.5)"],
                  borderWidth: 0,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              cutout: "70%",
            }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between h-[200px] bg-white p-8 rounded-lg shadow-md  lg:w-[368px] w-full">
        <div className="text-left flex flex-col gap-4 w-full">
          <h3 className="text-lg font-normal text-gray-800">
            Monthly Earnings
          </h3>
          <p className="text-xl text-black">$6,820</p>
          <div className="flex gap-2 items-center">
            <span className="border rounded-full p-2 w-2 h-2 flex items-center justify-center rotate-120 bg-red-400">
              <ArrowUpOutlined className="text-xs" />
            </span>
            <p className="text-sm text-black">+9% last year</p>
          </div>
          <div className="mt-2 w-full h-[50px]">
            <TEChart
              type="line"
              data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                datasets: [
                  {
                    label: "Revenue",
                    data: [300, 400, 320, 500, 420],
                    backgroundColor: "rgba(37, 99, 235, 0.3)",
                    borderColor: "#2563EB",
                    fill: true,
                    tension: 0.4,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                scales: {
                  x: { display: false },
                  y: { display: false },
                },
                plugins: {
                  legend: { display: false },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartchard1;
