import { useState } from "react";
import { AppstoreOutlined } from "@ant-design/icons";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

function Cardchard3() {
  const [selectedRange, setSelectedRange] = useState("Monthly");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRange(e.target.value);
    // คุณสามารถเปลี่ยน chartData ตามค่าที่เลือกได้ที่นี่
  };
  const data = [
    { name: "Jan", value: 20 },
    { name: "Feb", value: 45 },
    { name: "Mar", value: 30 },
    { name: "Apr", value: 60 },
    { name: "May", value: 80 },
  ];

  const financeStats = [
    { label: "Top sales", description: "Johnnathan Doe", amount: "+68" },
    { label: "Best Seller", description: "MaterialPro Admin", amount: "+68" },
    { label: "Most Commented", description: "Ample Admin", amount: "+68" },
  ];
  const productData = [
    {
      img: "/user1.jpg",
      name: 'Elite Admin"',
      color: "Sunil Joshi",
      category: "Low",
      price: "$3.9K",
    },
    {
      img: "/gg1.jpg",
      name: 'Elite Admin"',
      color: "Sunil Joshi",
      category: "Low",
      price: "$3.9K",
    },
    {
      img: "/gg2.jpg",
      name: 'Elite Admin"',
      color: "Sunil Joshi",
      category: "Low",
      price: "$3.9K",
    },
    {
      img: "/gg3.jpg",
      name: 'Elite Admin"',
      color: "Sunil Joshi",
      category: "Low",
      price: "$3.9K",
    },
    {
      img: "/gg4.jpg",
      name: 'Elite Admin"',
      color: "Sunil Joshi",
      category: "Low",
      price: "$3.9K",
    },
  ];
  return (
    <div className="flex md:flex-row flex-col gap-6 w-full flex-wrap justify-center">
      <div className="p-6 bg-white rounded-lg shadow-lg xl:w-[368px] md:w-full w-full h-auto  mx-auto">
        <div className="flex">
          <div className="text-start mb-4">
            <h2 className="text-xl font-medium text-gray-800">Weekly Stats</h2>
            <span className="text-md font-normal">Average sales</span>
          </div>
        </div>
        <div className="flex-col flex">
          <div className=" w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4f83f1" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#4f83f1"
                  strokeWidth={2}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex flex-col justify-between items-start gap-4">
            {financeStats.map((item, index) => (
              <div key={index} className="flex w-full justify-between gap-4 ">
                <div className="text-start text-2xl flex gap-3  items-center tracking-wide leading-tight">
                  <AppstoreOutlined className="text-xl p-3 rounded-md bg-red-300" />
                  <div className="flex flex-col">
                    <span className="text-sm ">{item.label}</span>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm justify-end  p-0.5 bg-blue-200 px-2 rounded-md">
                    {item.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg md:w-full xl:w-[750px] lg:w-[750px] w-full h-auto  mx-auto">
        <div className="flex justify-between">
          <div className="text-start mb-4">
            <h2 className="text-xl font-medium text-gray-800">
              Top Performers
            </h2>
            <span className="text-md font-normal">Best Employees</span>
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

        <div className="relative pt-12 overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Assigned
                </th>
                <th scope="col" className="px-6 py-3">
                  Project
                </th>
                <th scope="col" className="px-6 py-3">
                  Priority
                </th>
                <th scope="col" className="px-6 py-3">
                  Budget
                </th>
              </tr>
            </thead>
            <tbody>
              {productData.map((product, index) => (
                <tr
                  key={index}
                  className={`${
                    index !== productData.length - 1
                      ? "border-b border-gray-200 dark:border-gray-700"
                      : ""
                  } bg-white dark:bg-gray-800`}
                >
                  <td className="px-6 py-4 flex items-center text-black">
                    <img
                      className="w-12 h-12 rounded-full p-0.5"
                      src={product.img}
                      alt=""
                    />
                    Sunil Joshi
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.name}
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-16 h-6 flex items-center bg-green-300 justify-center border border-gray-400 rounded text-xs">
                      {product.category}
                    </div>
                  </td>
                  <td className="px-6 py-4">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cardchard3;
