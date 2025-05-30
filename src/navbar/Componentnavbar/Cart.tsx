import { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Buttons from "../../Components/Buttons";

interface CartItem {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
}

const mockCart: CartItem[] = [
  {
    id: 1,
    name: "Supreme toys cooker",
    category: "Kitchenware Item",
    price: 250,
    quantity: 1,
    image: "/cart1.jpg",
  },
  {
    id: 2,
    name: "Supreme toys cooker",
    category: "Kitchenware Item",
    price: 250,
    quantity: 1,
    image: "/cart2.jpg",
  },
  {
    id: 3,
    name: "Supreme toys cooker",
    category: "Kitchenware Item",
    price: 250,
    quantity: 1,
    image: "/cart3.jpg",
  },
];

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCart);

  const subTotal: number = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total: number = subTotal + 4300; // ค่าขนส่งหรือค่าธรรมเนียม

  const increaseQuantity = (id: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  return (
    <>
      {/* ปุ่มไอคอน */}
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer p-2">
        <ShoppingCartOutlined style={{ fontSize: 20 }} />
      </div>

      {/* กล่อง Cart ที่สไลด์ออกมา */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center ">
          <div className="flex justify-between max-w-md items-center w-full">
            <p className="text-base font-medium ml-4">Shopping Cart</p>
            <Buttons
              label="5 new"
              className="bg-[#4F73D9] text-white h-6 px-3 my-auto text-sm flex items-center justify-center rounded-2xl"
            />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>
        <div className="p-4 flex flex-col gap-8">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 mb-6 items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <p className="text-base font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.category}</p>
                <div className="flex items-center gap-4 space-x-2">
                  <p className="text-sm text-black font-medium">
                    ${item.price}
                  </p>

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-[#13DEB9] text-white text-sm font-bold w-8 h-8 rounded flex items-center justify-center"
                  >
                    -
                  </button>

                  <span className="w-6 text-center">{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-[#13DEB9] text-white text-sm font-bold w-8 h-8 rounded flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="pt-4 text-sm flex flex-col gap-7 text-gray-700 font-medium">
            <div className="flex justify-between mb-2">
              <span>Sub Total</span>
              <span>${subTotal}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="text-lg text-black font-semibold">${total}</span>
            </div>
            <button className="w-full border border-blue-500 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition">
              Go to shopping cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
