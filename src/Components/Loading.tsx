import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return oldProgress + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-screen ">
      <div className="flex flex-col gap-4 items-center space-y-6 w-72">
        <img src="/logo.svg" alt="loading" className="w-full h-full" />
        <div className="w-full">
          <div className="bg-gray-700 h-3 rounded">
            <div
              className={`h-3 rounded transition-all duration-50 ${
                progress === 100 ? "bg-emerald-500" : "bg-green-400"
              }`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white mt-2 text-sm text-center">
            {progress < 100 ? `กำลังโหลด... ${progress}%` : "โหลดเสร็จ!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
