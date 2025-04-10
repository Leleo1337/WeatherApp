import { Crosshair, Search } from "lucide-react";
import Clouds from "./assets/clouds.png";
import weather from "./assets/icons/mist.svg";
import "./index.css";

function App() {
   return (
      <>
         <main className="absolute top-1/2 left-1/2 -translate-1/2 container max-w-[400px] bg-gradient-to-b from-[#352163] to-[#33143C] sm:rounded-xl ">
            <div className="p-6 py-8">
               <div className="relative flex gap-2 w-full">
                  <input
                     className="w-full pl-10 pr-4 py-2 bg-white/20 text-white rounded-md border border-gray-200/30"
                     type="text"
                     placeholder="Enter a city name"
                  />
                  <Search size={22} className="absolute top-2 left-2 text-white" />
                  <button className="bg-white/20 px-2.5 border border-white/20 rounded-md cursor-pointer">
                     <Crosshair size={22} color="white" />
                  </button>
               </div>
            </div>
            <div className="h-[350px] overflow-hidden">
               <div className="flex justify-center items-center">
                  <div className="flex flex-col gap-4 items-center justify-center">
                     <img className="w-30" src={weather} alt="Current weather" />
                     <h3 className="relative right-2 text-5xl text-white font-bold">
                        22 <span className="absolute top-0 left-14 text-xl font-normal">°C</span>
                     </h3>
                     <p className="text-lg text-white">mist</p>
                  </div>
               </div>
               <div
                  className="absolute inset-0 bg-cover bg-center backdrop-opacity-70"
                  style={{ backgroundImage: `url(${Clouds})` }}
               />
            </div>
         </main>
      </>
   );
}

export default App;
