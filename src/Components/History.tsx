function History() {
    const tableData = [
        {
          image: "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/nft/g1.webp",
          name: "Quantum Ape",
          event: "Purchase",
          eventColor: "bg-blue-100 text-blue-500",
          from: { name: "John", avatar: "/gg1.jpg" },
          to: { name: "Deo", avatar: "/gg2.jpg" },
          amount: 4,
          value: "16 ETH",
          date: "13 July, 2024",
        },
        {
          image: "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/nft/g2.webp",
          name: "Bored Ape",
          event: "Transfer",
          eventColor: "bg-red-100 text-red-400",
          from: { name: "Liam", avatar: "/gg1.jpg" },
          to: { name: "Noah", avatar: "/gg2.jpg" },
          amount: 4,
          value: "8 ETH",
          date: "1 Aug, 2024",
        },
        {
          image: "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/nft/g3.webp",
          name: "Space Ape",
          event: "List",
          eventColor: "bg-green-100 text-green-500",
          from: { name: "Oliver", avatar: "/gg1.jpg" },
          to: { name: "Elijah", avatar: "/gg2.jpg" },
          amount: 4,
          value: "9 ETH",
          date: "12 Jan, 2024",
        },
        {
          image: "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/nft/g4.webp",
          name: "Fancy Bears",
          event: "Purchase",
          eventColor: "bg-blue-100 text-blue-500",
          from: { name: "James", avatar: "/gg1.jpg" },
          to: { name: "Lucas", avatar: "/gg2.jpg" },
          amount: 4,
          value: "10 ETH",
          date: "1 Feb, 2024",
        },
      ];
  return (
    <div className="overflow-x-auto p-6 bg-white rounded-lg shadow-lg overflow-auto w-full h-full mx-auto">
        <div className="flex flex-col gap-8">
            <div className="text-start mb-4">
              <h2 className="text-xl font-medium text-gray-800">
                Recent Transactions
              </h2>
              <span className="text-md text-black font-normal">
                Examining the Risks of Recent Transactions
              </span>
            </div>
      <table className="min-w-full  divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="text-left p-4">Item</th>
            <th className="text-left p-4">Event</th>
            <th className="text-left p-4">From - To</th>
            <th className="text-left p-4">Amount</th>
            <th className="text-left p-4">Value</th>
            <th className="text-left p-4">Date</th>
            <th className="text-left p-4">Link</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {tableData.map((item, index) => (
            <tr key={index} className="bg-white hover:bg-gray-50">
              {/* Item */}
              <td className="flex items-center gap-3 p-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md" />
                <span className="text-gray-900 font-medium">{item.name}</span>
              </td>

              {/* Event */}
              <td className="p-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.eventColor}`}>
                  {item.event}
                </span>
              </td>

              {/* From - To */}
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <img src={item.from.avatar} className="w-6 h-6 rounded-full" />
                  <span>{item.from.name}</span>
                  <span className="text-gray-400">{item.event === "Transfer" || item.event === "List" ? "←" : "→"}</span>
                  <img src={item.to.avatar} className="w-6 h-6 rounded-full" />
                  <span>{item.to.name}</span>
                </div>
              </td>

              {/* Amount */}
              <td className="p-4">{item.amount}</td>

              {/* Value */}
              <td className="p-4  gap-1">
                <span>🪙</span>
                <span>{item.value}</span>
              </td>

              {/* Date */}
              <td className="p-4">{item.date}</td>

              {/* Link */}
              <td className="p-4 text-gray-400 text-lg">⋯</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default History