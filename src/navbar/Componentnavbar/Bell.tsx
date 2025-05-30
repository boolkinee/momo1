import { useState } from "react";
import { BellOutlined } from "@ant-design/icons";
import Buttons from "../../Components/Buttons";

type NotificationItem = {
    image: string;
    title: string;
    description: string;
  };
function Bell() {
  const [isOpen, setIsOpen] = useState(false);
  
  const notifications: NotificationItem[] = [
    {
      image: "/user1.jpg",
      title: "Roman Joined the Team!",
      description: "Congratulate him",
    },
    {
        image: "/user2.jpg",
      title: "New message",
      description: "Salma sent you new message",
    },
    {
        image: "/user3.jpg",
      title: "Bianca sent payment",
      description: "Check your earnings",
    },
    {
        image: "/user4.jpg",
      title: "Jolly completed tasks",
      description: "Assign her new tasks",
    },
    {
        image: "/user5.jpg",
      title: "John received payment",
      description: "$230 deducted from account",
    },
  ];
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <BellOutlined style={{ fontSize: 20 }} onClick={toggleDropdown} />
    
      {/* แสดงกล่องข้อความเมื่อคลิก */}
      {isOpen && (
        <div className="absolute mt-2 right-18 bg-white shadow-lg  rounded-lg w-76 p-4">
          <div className="flex justify-between max-w-md items-center w-full">
          <p className="text-base font-medium ml-4">Notification</p>
            <Buttons
              label="5 news"
              className="bg-[#4F73D9] text-white h-6 px-3 my-auto text-sm flex items-center justify-center rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-6 pt-5">
        {notifications.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-sm">{item.title}</p>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button className="w-full border border-blue-500 text-blue-600 text-sm py-2 rounded-lg hover:bg-blue-50 transition">
          See All Notifications
        </button>
      </div>
        </div>
      )}
    </div>
  );
}

export default Bell;
