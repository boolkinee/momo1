import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

const options = [
  { name: "USD", icon: "/english.svg" },
  { name: "THB", icon: "/english.svg" },
  { name: "EUR", icon: "/english.svg" },
];
function Cardbank() {
  const [selected, setSelected] = useState(options[0]);

  const productData = [
    {
      img: "/user1.jpg",
      name: "18,670.21",
      color: "Alan Walker Origins",
      category: "-20.38%",
      price: "$6.8k",
    },
    {
      img: "/gg1.jpg",
      name: "15,880.20",
      color: "The StarSharks NFTs",
      category: "+15.14%",
      price: "$6.8k",
    },
    {
      img: "/gg4.jpg",
      name: "14,920.20",
      color: "Sacred Realm",
      category: "-10.25%",
      price: "$6.8k",
    },
  ];
  return (
    <div className="flex xl:flex-row flex-col justify-center w-full max-w-7xl items-center gap-6">
      <div className="p-6 bg-white rounded-lg shadow-lg overflow-auto xl:w-[768px] lg:w-[768px]  w-full  h-[460px] mx-auto">
        <div className="flex justify-between">
          <div className="text-start mb-4">
            <h2 className="text-xl font-medium text-gray-800">
              Top Performers
            </h2>
            <span className="text-md text-black font-normal">
              Best Employees
            </span>
          </div>
          <div className="w-32">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2  text-left border text-sm text-black">
                  <span className="flex items-center justify-center gap-2">
                    <img src={selected.icon} alt="" className="w-5 h-5" />
                    {selected.name}
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-sm text-black ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none">
                    {options.map((option, idx) => (
                      <Listbox.Option
                        key={idx}
                        className={({ active }) =>
                          `cursor-pointer select-none relative py-2 pl-3 pr-4 ${
                            active ? "bg-blue-100" : ""
                          }`
                        }
                        value={option}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <img src={option.icon} alt="" className="w-5 h-5" />
                          {option.name}
                        </div>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
        <div className="relative pt-12 overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Collection
                </th>
                <th scope="col" className="px-6 py-3">
                  Volume
                </th>
                <th scope="col" className="px-6 py-3">
                  24h
                </th>
                <th scope="col" className="px-6 py-3">
                  Floor Price
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
                    {product.color}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.name}
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-16 h-6 flex items-center bg-red-300 justify-center border border-gray-400 rounded text-xs">
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
      <div className=" bg-white rounded-2xl shadow-xl xl:w-[360.66px]  w-full h-[460px] ">
        <div className="flex flex-col gap-6">
          <div className="relative">
            <img className="rounded-md" src="/money.jpg" alt="" />
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-6 z-50 flex flex-col gap-2 items-center">
              <img className="rounded-full w-12 h-12" src="/gg1.jpg" alt="" />
              <p className="text-black">The Cat X Takaish</p>
            </div>
            <div className="flex justify-between p-5 pt-20">
              <p className="text-black">
                Volume <br />
                90,015.90 USD
              </p>
              <p className="text-black">
                Floor Price <br />
                40.00 USD
              </p>
            </div>
          </div>
          <div className="flex items-center  border-t-1 justify-between p-3 ">
            <div className="flex items-center gap-4 ">
              <div className="bg-gray-100 p-2 rounded-full">
              <span className="text-xl">🪙</span>
              </div>
              <div className="">
                <p className="text-gray-800  font-semibold">
                  1.23 <span className="text-gray-900">ETH</span>
                </p>
                <p className="text-gray-400 text-sm">$12,000</p>
              </div>
            </div>
            <div>
              <p className="text-red-400 font-semibold">-6.8%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardbank;
