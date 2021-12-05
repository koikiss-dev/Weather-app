import Image from "next/image";
import { Icon } from "@iconify/react";
const CardMain = ({
  city,
  hour,
  clima,
  velocidad,
  agua,
  solHora,
  temp,
  tempF,
  icon,
}) => {
  return (
    <div className="bg-gradient-to-r from-prpleInit-272  to-prpleEnd-586 flex items-center justify-between m-7 pt-0 pb-8 pr-5 text-white rounded-xl sm:flex-col sm:mx-40">
      <div className="flex items-center flex-col">
        <Image
          className="object-contain img-responsive"
          src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
          alt="clima"
          width="130"
          height="130"
          quality="90"
          priority
          placeholder="blur"
          blurDataURL
        />
        <span className="text-xl -mt-8 sm:-mt-4 sm:text-3xl">{clima}</span>
      </div>
      {/*info */}
      <div className="flex flex-col items-center mt-8 sm:mt-2">
        <h1 className=" text-3xl sm:text-6xl sm:mb-2">{city}</h1>
        <p className="text-lg">
          {temp}°C / {tempF}°F
        </p>
        <div className="flex">
          <div className="mr-4 flex items-center">
            <span className="mr-1">{velocidad}km/h</span>
            <box-icon name="wind" color="#ffffff" size="sm"></box-icon>
          </div>
          <div className="flex items-center">
            <span className="mr-1">{agua}%</span>
            <box-icon
              name="droplet"
              type="solid"
              size="sm"
              color="#ffffff"
            ></box-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMain;
