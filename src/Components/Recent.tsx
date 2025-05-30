import { SmallDashOutlined } from "@ant-design/icons";

function Recent() {
  const data = [
    {
      icon: "🪙",
      amount: "1.23",
      unit: "ETH",
      price: "$12,000",
      change: "-6.8%",
    },
    {
      icon: "🪙",
      amount: "0.87",
      unit: "ETH",
      price: "$8,500",
      change: "-2.3%",
    },
    {
      icon: "🪙",
      amount: "2.10",
      unit: "ETH",
      price: "$18,000",
      change: "+3.2%",
    },
  ];
  const data1 = [
    {
      icon: "/gg1.jpg",
      amount: "Project Solona",
      unit: "ETH",
      price: "12.200 Items",
      change: "$300,000+",
    },
    {
      icon: "/gg2.jpg",
      amount: "The Aston Lix",
      unit: "ETH",
      price: "10.150 Items",
      change: "$250,000+",
    },
    {
      icon: "/gg3.jpg",
      amount: "2.10",
      unit: "ETH",
      price: "10.100 Items",
      change: "$230,000+",
    },
  ];
  return (
    <div className="flex xl:flex-row flex-col justify-center w-full max-w-7xl items-center gap-6">
      <div className="p-6 bg-white rounded-lg shadow-lg overflow-auto xl:w-1/2 lg:w-[768px]  w-full  h-full mx-auto">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="text-start mb-4">
              <h2 className="text-xl font-medium text-gray-800">
                Recent Transactions
              </h2>
              <span className="text-md text-black font-normal">
                Examining the Risks of Recent Transactions
              </span>
            </div>
            <div className="rotate-90 text-xl text-black font-extrabold">
              <SmallDashOutlined />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            {data.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 ${
                  index !== data.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">
                      {item.amount}{" "}
                      <span className="text-gray-900">{item.unit}</span>
                    </p>
                    <p className="text-gray-400 text-sm">{item.price}</p>
                  </div>
                </div>
                <div>
                  <p
                    className={`font-semibold ${
                      item.change.includes("-")
                        ? "text-red-400"
                        : "text-green-500"
                    }`}
                  >
                    {item.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg overflow-auto xl:w-1/2 lg:w-[768px]  w-full  h-full mx-auto">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="text-start mb-4">
              <h2 className="text-xl font-medium text-gray-800">
                Trending Creator
              </h2>
              <span className="text-md text-black font-normal">
                The Benefits of Being a Trending Creator
              </span>
            </div>
            <div className="rotate-90 text-xl text-black font-extrabold">
              <SmallDashOutlined />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            {data1.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 ${
                  index !== data1.length - 1 ? "border-b" : ""}`}
                  >
                <div className="flex items-center gap-4">   
                    <img className="w-12 h-12 rounded-full" src={item.icon} alt="" />
                  <div>
                    <p className="text-gray-800 font-semibold">
                      {item.amount}{" "}
                      <span className="text-gray-900">{item.unit}</span>
                    </p>
                    <p className="text-gray-400 text-sm">{item.price}</p>
                  </div>
                </div>
                <div>
                  <p
                    className={`font-semibold ${
                      item.change.includes("-")
                        ? "text-red-400"
                        : "text-green-500"
                    }`}
                  >
                    {item.change} <br /> <span className="text-black">Total USD</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recent;
