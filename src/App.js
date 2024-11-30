import "./App.css";
import LestSide from "./component/LeftSide/LestSide";
import MiddleSide from "./component/Middle/MiddleSide";
import RightSide from "./component/Right/RightSide";

function App() {
  return (
    <>
      <div className="flex h-screen">
      <div   className="w-1/5 bg-black text-white">
      <LestSide/>
      </div>
      <div className="w-3/5 bg-gradient-to-b from-red-500 to-black text-white">
      <MiddleSide/>
      </div>
        <div className="w-1/5 bg-gradient-to-b from-red-900 to-black text-white">
        <RightSide />
        </div>
      
      </div>
    </>
  );
}

export default App;
