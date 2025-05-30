
import { TEChart } from "tw-elements-react";
import { AppstoreOutlined, ArrowUpOutlined,MessageOutlined } from "@ant-design/icons";
import Progress from "../../Components/Progress";


function Cardchard2() {
  const avatars = ["/gg1.jpg", "/gg2.jpg", "/gg3.jpg", "/gg4.jpg"];
  const financeStats = [
    { label: "Salary", amount: "$36,358" },
    { label: "Profit", amount: "$5,296" },
  ];
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
    <div className="flex md:flex-col lg:flex-row flex-wrap flex-col gap-6 w-full min-w-full mx-6 justify-center">
      <div className="p-6 bg-white rounded-lg shadow-lg md:w-full xl:w-[368px] lg:w-full h-auto  mx-auto">
        <div className="flex justify-between">
          <div className="text-start mb-4">
            <h2 className="text-xl font-medium text-gray-800">
              Employee Salary
            </h2>
            <span className="text-md font-normal">Every month</span>
          </div>
        </div>
        <div className="flex-col flex">
          <div className="md:w-full xl:w-[300px]  w-full h-[300px]">
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
            <div className="flex justify-between items-start gap-4">
              {financeStats.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <AppstoreOutlined className="text-xl p-3 rounded-md bg-[#EEF3FF]" />
                  <div className="text-start text-2xl tracking-wide leading-tight">
                    <span className="text-sm text-gray-500">{item.label}</span>
                    <br />
                    <p className="text-sm">{item.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 max-w-full">
        {/* แถวแรก: การ์ด 1 และ การ์ด 2 */}
        <div className="xl:flex-row lg:flex-row md:flex-col flex flex-col gap-4  ">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-4 md:w-full lg:w-1/2 xl:w-[172px] w-full h-[256px] flex flex-col justify-between">
            <div className="p-4 flex flex-col gap-3">
              <h3 className="text-md font-semibold text-gray-800">Customers</h3>
              <p className="text-gray-600 text-xl mt-2">36,358</p>
              <div className="flex gap-2 items-center mt-2">
                <span className="border rounded-full p-2 w-2 h-2 flex items-center justify-center rotate-120 bg-red-400">
                  <ArrowUpOutlined className="text-xs" />
                </span>
                <p className="text-sm text-black">+9%</p>
              </div>
            </div>
            <div className="w-full h-[50px]">
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
                  scales: { x: { display: false }, y: { display: false } },
                  plugins: { legend: { display: false } },
                }}
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-4 md:w-full lg:w-[172px] w-full h-[256px] flex flex-col justify-between">
            <div className="p-4 flex flex-col gap-3">
              <h3 className="text-md font-semibold text-gray-800">Projects</h3>
              <p className="text-gray-600 text-xl mt-2">78,298</p>
              <div className="flex gap-2 items-center mt-2">
                <span className="border rounded-full p-2 w-2 h-2 flex items-center justify-center -rotate-30 bg-green-300">
                  <ArrowUpOutlined className="text-xs" />
                </span>
                <p className="text-sm text-black">+9%</p>
              </div>
            </div>
            <div className="w-full flex-grow h-[40px]">
              <TEChart
                type="pie"
                data={{
                  datasets: [
                    {
                      label: "Traffic",
                      data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
                      backgroundColor: [
                        "rgba(63, 81, 181, 0.5)",
                        "rgba(77, 182, 172, 0.5)",
                        "rgba(66, 133, 244, 0.5)",
                        "rgba(156, 39, 176, 0.5)",
                        "rgba(233, 30, 99, 0.5)",
                        "rgba(66, 73, 244, 0.4)",
                        "rgba(66, 133, 244, 0.2)",
                      ],
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                }}
              />
            </div>
          </div>
        </div>

        {/* แถวที่สอง: Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-4 h-[256px] flex flex-col justify-between">
          {/* เนื้อหาการ์ด 3 */}
          <div className="flex items-center md:p-8 p-0 gap-4">
            {/* รูปภาพด้านซ้าย */}
            <img
              src="/gg1.jpg"
              alt="Example"
              className="w-20 h-20 rounded-md object-cover"
            />

            {/* ข้อความด้านขวา */}
            <div>
              <h3 className="text-md font-semibold flex-wrap w-40 text-gray-800">
                Super awesome, Vue coming soon!
              </h3>
              <p className="text-gray-600">22 March, 2024</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
          <div className="relative w-60 h-16 ">
            {avatars.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`avatar-${index}`}
                className={`absolute w-12 h-12 rounded-full border-2 border-white`}
                style={{
                  left: `${index * 32}px`, // 32px = 8 tailwind units = overlap effect
                  zIndex: avatars.length - index,
                }}
              />
            ))}
          </div>
          <div className="flex items-center justify-center border p-2 w-10 h-10 rounded-md bg-blue-50 border-transparent ">
          <MessageOutlined />
          </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#5D87FF] rounded-lg shadow-lg md:w-full lg:w-[368px] xl:w-[368px] w-full h-auto  mx-auto">
        <div className="flex p-6 justify-between">
          <div className="text-start mb-4">
            <h2 className="text-xl font-medium text-white">
              Best Selling Products
            </h2>
            <span className="text-md font-normal text-white">
              Overview 2024
            </span>
          </div>
        </div>
        <div className="pt-10 p-2 flex w-full  flex-col ">
          <div className="flex justify-center items-start gap-4">
            <img src="/pig.png" alt="" />
          </div>
          <div className="bg-white rounded-md h-full">
            <Progress title="MaterialPro" amount="$23,568" percentage={55} />
            <Progress title="Flexy Admin" amount="$23,568" percentage={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardchard2;
