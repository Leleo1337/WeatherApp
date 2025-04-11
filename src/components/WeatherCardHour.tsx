import { WeatherCardHourProps } from "../types/WeatherAPIResponse";

export function WeatherCardHour({weatherImg, weatherHour, temperature}: WeatherCardHourProps) {
   return (
      <div className="flex p-2">
         <div className="flex flex-col gap-0.5 z-2 justify-center items-center h-20">
            <span className="text-white text-md">{weatherHour}</span>
            <img src={weatherImg} alt="current Weater" className="w-10" />
            <p className="text-white text-md font-semibold">{temperature}°</p>
         </div>
      </div>
   );
}
