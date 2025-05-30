

type NFTCardProps = {
    image: string;
    title: string;
    eth: number;
    timeLeft: string;
    className?: string;
  };
function Nftcard({ image, title, eth, timeLeft }: NFTCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden md:w-52 w-full">
    <div className="relative">
      <img src={image} alt={title} className="md:w-52 w-full h-48 object-cover" />
      <span className="absolute top-2 right-2 bg-black text-white text-[10px] px-3 py-1 rounded-full font-mono">
        {timeLeft}
      </span>
    </div>
    <div className="p-3 flex flex-col gap-2"> {/* ลด padding และ gap */}
      <h2 className="text-lg  mb-1 text-black">{title}</h2> {/* ลด margin-bottom */}
      <div className="flex justify-between items-center text-sm text-gray-600 mb-2"> {/* ลด margin-bottom */}
        <div className="flex items-center">
          <span className="mr-1">🪙</span> {eth} ETH
        </div>
        <span>Volume</span>
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
        Place a Bid
      </button>
    </div>
  </div>
  
  )
}

export default Nftcard