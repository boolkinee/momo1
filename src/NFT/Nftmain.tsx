import Cardbank from "../Components/Cardbank";
import History from "../Components/History";
import Recent from "../Components/Recent";
import Nft from "./Nft";

function Nftmain() {
  return (
    <div className="max-w-screen-xl mx-auto container">
      <div className="my-8 flex items-center">
        <div className="w-full flex flex-col">
          {/* Left Column */}
          <div className="w-full  p-4">
            <div className="mx-2 w-full flex flex-col items-center text-white">
              <Nft />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full p-4">
            <div className="mx-2 w-full flex flex-col items-center"><Cardbank /></div>
          </div>
          <div className="w-full p-4">
            <div className="mx-2 w-full flex flex-col items-center"><Recent /></div>
          </div>
          <div className="w-full p-4">
            <div className="mx-2 w-full flex flex-col items-center"><History /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nftmain;
