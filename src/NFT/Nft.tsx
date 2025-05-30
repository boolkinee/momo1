import Nftcard from "../Components/Nftcard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowUpOutlined } from "@ant-design/icons";
function Nft() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // ปรับจำนวนการ์ดที่แสดงในแต่ละแถว
    slidesToScroll: 1,
    centerMode: true, // ใช้ให้การ์ดถูกจัดกลาง
    centerPadding: "0", // ลดการ Padding ระหว่างการ์ด
    focusOnSelect: true,
    arrows: false, // เอาปุ่ม arrow ออก
    responsive: [
      {
        breakpoint: 1100, // สำหรับหน้าจอขนาดกลางถึงใหญ่
        settings: {
          slidesToShow: 3, // แสดง 3 การ์ด
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 700, // สำหรับหน้าจอขนาดเล็ก
        settings: {
          slidesToShow: 2, // แสดง 2 การ์ด
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600, // สำหรับมือถือ
        settings: {
          slidesToShow: 1, // แสดง 1 การ์ด
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="flex xl:flex-row  flex-col justify-center w-full max-w-7xl items-center gap-6">
      <div className="p-8 bg-white rounded-md shadow-xl xl:w-[768px] lg:w-[768px]  w-full  h-[460px]  mx-auto">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="text-start">
            <h2 className="text-2xl font-bold text-gray-800">
              Top Collectibles
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              The Beginner's Guide to Collectible Items
            </p>
          </div>

          {/* Slider Section */}
          <div className="w-full mx-auto">
            <Slider {...settings}>
              <div className="px-1">
                <Nftcard
                  image="/nft1.jpg"
                  title="Geo Runners"
                  eth={10.1}
                  timeLeft="04h 09m 12s"
                  className="w-full sm:w-64 md:w-80 lg:w-96 xl:w-1/4" // กำหนดความกว้างของการ์ดในแต่ละขนาดหน้าจอ
                />
              </div>
              <div className="px-1">
                <Nftcard
                  image="/nft2.jpg"
                  title="Algo cube"
                  eth={10.1}
                  timeLeft="01h 02m 10s"
                  className="w-full sm:w-64 md:w-80 lg:w-96 xl:w-1/4"
                />
              </div>
              <div className="px-1">
                <Nftcard
                  image="/nft4.jpg"
                  title="Cube Runner"
                  eth={10.1}
                  timeLeft="02h 10m 30s"
                  className="w-full sm:w-64 md:w-80 lg:w-96 xl:w-1/4"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-xl xl:w-[360.66px]  w-full h-[460px]  ">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="text-start p-6">
            <h2 className="text-2xl font-bold text-gray-800">My Wallets</h2>
            <p className="text-gray-500 text-sm mt-1">
              Smart Wallets for the Digital Ag
            </p>
            <div className="pt-2">
              <img
                className="rounded-md h-[220px] w-full"
                src="/bank1.png"
                alt=""
              />
            </div>
            <div className="pt-4 flex flex-col gap-2">
                <div className="flex justify-between">
              <p className="text-black text-2xl">$1,206.89</p>
              <p className="text-black text-2xl">***</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="border rounded-full p-2 w-2 h-2 flex items-center justify-center -rotate-30 bg-green-300">
                  <ArrowUpOutlined className="text-xs" />
                </span>
                <p className="text-sm text-black">USD 420,000 <span className="text-green-400">(59,11%)</span></p>
              </div>
              <button type="button" className="button">View Balance</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nft;
