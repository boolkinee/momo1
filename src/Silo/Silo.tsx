import React from "react";


interface SiloTankProps {
  percent: number;
}

const SiloTank: React.FC<SiloTankProps> = ({ percent }) => {
  const clampPercent = Math.max(0, Math.min(100, percent));

  return (
    <div className="flex flex-col items-center">
      <svg width="60" height="140" viewBox="0 0 60 140">
        {/* Outer Silo */}
        <path
          d="M15 10 
             Q30 0 45 10 
             L45 110 
             Q30 130 15 110 
             Z"
          fill="none"
          stroke="#333"
          strokeWidth="2"
        />

        {/* Fill based on percent */}
        <clipPath id="silo-clip">
          <path
            d="M15 10 
               Q30 0 45 10 
               L45 110 
               Q30 130 15 110 
               Z"
          />
        </clipPath>

        <rect
          x="0"
          y={140 - (clampPercent * 1.2)} // scale fill based on % height
          width="60"
          height={clampPercent * 1.2}
          fill="#ef4444" // red-500
          clipPath="url(#silo-clip)"
        />

        {/* Text in center */}
        <text
          x="30"
          y="70"
          textAnchor="middle"
          fontSize="14"
          fill="#000"
        >
          {clampPercent}%
        </text>
      </svg>
      
    </div>
  );
};

export default SiloTank;
