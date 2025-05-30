import {
  AppstoreOutlined,
  CreditCardOutlined,
  DollarOutlined,
  WalletOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

const Recharts = () => {
  const financeStats = [
    { label: "Top sales", description: "Johnnathan Doe", amount: "+68" },
    { label: "Best Seller", description: "MaterialPro Admin", amount: "+68" },
    { label: "Most Commented", description: "Ample Admin", amount: "+68" },
  ];

  const gateways = [
    {
      label: "PayPal",
      desc: "Big Brands",
      amount: "+$6,235",
      icon: <DollarOutlined className="text-xl text-blue-600" />,
      bg: "bg-blue-100",
    },
    {
      label: "Wallet",
      desc: "Bill payment",
      amount: "+$345",
      icon: <WalletOutlined className="text-xl text-green-600" />,
      bg: "bg-green-100",
    },
    {
      label: "Credit card",
      desc: "Money reversed",
      amount: "+$2,235",
      icon: <CreditCardOutlined className="text-xl text-yellow-600" />,
      bg: "bg-yellow-100",
    },
    {
      label: "Refund",
      desc: "Bill payment",
      amount: "-$32",
      icon: <ReloadOutlined className="text-xl text-red-600" />,
      bg: "bg-red-100",
    },
  ];

  const weeklyData = [
    { name: "Jan", value: 20 },
    { name: "Feb", value: 45 },
    { name: "Mar", value: 30 },
    { name: "Apr", value: 60 },
    { name: "May", value: 80 },
  ];

  const yearlyData = [
    { month: "Apr", sales: 15 },
    { month: "May", sales: 20 },
    { month: "June", sales: 40 },
    { month: "July", sales: 25 },
    { month: "Aug", sales: 18 },
    { month: "Sept", sales: 22 },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full gap-6">
      {/* Weekly Stats */}
      <div className="w-full lg:w-1/3">
        <div className="bg-white rounded-lg shadow-md p-4 h-full">
          <h2 className="text-xl font-semibold mb-2">Weekly Stats</h2>
          <p className="text-sm text-gray-500 mb-4">Average sales</p>
          <div className="w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyData}>
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
          <div className="mt-4 space-y-4">
            {financeStats.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <AppstoreOutlined className="text-xl p-2 rounded-md bg-red-300 text-white" />
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </div>
                <span className="text-sm bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
                  {item.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Yearly Sales */}
      <div className="w-full lg:w-1/3">
        <div className="bg-white rounded-lg shadow-md p-4 h-full">
          <h2 className="text-xl font-semibold mb-2">Yearly Sales</h2>
          <p className="text-sm text-gray-500 mb-4">Every month</p>
          <div className="w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={yearlyData}>
                <XAxis dataKey="month" />
                <Tooltip />
                <Bar
                  dataKey="sales"
                  fill="#4f83f1"
                  barSize={30}
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between mt-4 pt-15 border-t border-gray-100">
      <div>
        <p className="text-sm text-gray-500">Total Sales</p>
        <p className="text-lg font-semibold text-blue-500">$36,358</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Expenses</p>
        <p className="text-lg font-semibold text-orange-500">$5,296</p>
      </div>
    </div>
        </div>
      </div>

      {/* Payment Gateways */}
     <div className="w-full lg:w-1/3">
  <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col justify-between">
    <div>
      <h2 className="text-xl font-semibold mb-2">Payment Gateways</h2>
      <p className="text-sm text-gray-500 mb-4">Platform for Income</p>

      <div className="flex flex-col gap-5">
        {gateways.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-full ${item.bg}`}>{item.icon}</div>
              <div>
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold">{item.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* ปุ่มขยับลงล่างสุด */}
    <button className="mt-auto w-full py-2 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
      View all transactions
    </button>
        </div>
      </div>
    </div>
  );
};

export default Recharts;
