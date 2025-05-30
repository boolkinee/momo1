import Cardmain from "../Components/Cardmain";
import Cardchard from "./CardComponent/Cardchard";
import Cardchard2 from "./CardComponent/Cardchard2";
import Cardchard3 from "./CardComponent/Cardchard3";

function Modern() {
  return (
    <div className="w-screen container mx-auto max-w-full">
      <div className="w-full py-1">
        <Cardmain />
        <div className="mt-3 mx-auto flex flex-wrap justify-center gap-3">
          {/* grid items */}
          <div className="md:w-6xl flex justify-center items-center">
            <Cardchard />
          </div>
          <div className="w-full  p-0">
            <Cardchard2 />
          </div>
          <div className="w-full  p-0">
            <Cardchard3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modern;
