import React from 'react';

interface ProgressProps {
  title: string;
  amount: string;
  percentage: number;
}

const Progress: React.FC<ProgressProps> = ({ title, amount, percentage  }) => {
  return (
    <div className="p-8 ">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-gray-900 font-semibold">{title}</h4>
          <p className="text-gray-500 text-sm">{amount}</p>
        </div>
        <span className={`text-sm font-semibold px-2 py-1 rounded-md`}>
          {percentage}%
        </span>
      </div>
      <div className="mt-3 w-full h-1.5 bg-gray-100 rounded-full">
        <div
          className={`h-full bg-blue-500 border border-[#5D87FF]  rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
