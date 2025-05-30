const RecentTransactions = () => {
  const transactions = [
    { time: "09:30 am", title: "Payment received from John Doe", amount: "$385.90" },
    { time: "10:00 am", title: "New sale recorded", id: "#ML-3467" },
    { time: "12:00 am", title: "Payment was made to Michael", amount: "$64.95" },
    { time: "09:30 am", title: "New sale recorded", id: "#ML-3467" },
    { time: "09:30 am", title: "New arrival recorded", id: "#ML-3467" },
    { time: "12:00 am", title: "Payment Done" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-6">Recent Transactions</h2>
      <ul className="space-y-6 relative pl-14">
        <div className="absolute left-12 top-0 bottom-0 w-[2px] bg-gray-200"></div>

        {transactions.map((item, index) => (
          <li key={index} className="flex items-start gap-4 relative">
            <p className="text-xs text-gray-400 w-20 mt-1">{item.time}</p>
            <span className="absolute left-8 mt-2 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-white shadow" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{item.title}</p>
              {item.id && <p className="text-xs text-gray-500">{item.id}</p>}
              {item.amount && (
                <p className="text-sm text-green-600 font-semibold">{item.amount}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
