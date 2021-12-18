import React from "react";
import Image from "next/image";
const CardingFiveMain = ({ max, min, icon, temp, tempF }) => {
  return (
    <div>
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
      <p className="text-lg">
        {temp}°C / {tempF}°F
      </p>
    </div>
  );
};

export default CardingFiveMain;
