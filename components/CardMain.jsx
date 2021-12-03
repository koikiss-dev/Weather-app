import Image from "next/image";

const CardMain = ({
  city,
  hour,
  clima,
  velocidad,
  agua,
  solHora,
  temp,
  icon,
}) => {
  return (
    <div className="bg-gray-700 text-center m-5 py-5 text-white rounded-2xl">
      {/*container*/}
      <div className="mb-2">
        {/*top*/}
        <h1 className="text-4xl">{city}</h1>
        <span>{hour}</span>
      </div>
      <Image
        src={`http://openweathermap.org/img/w/${icon}.png`}
        alt="clima"
        width="500"
        height="500"
        layaut="fill"
        priority
        placeholder="blur"
        blurDataURL
      />
      <span className="text-lg">{clima}</span>
      {/*content info */}
      <div className="flex items-center justify-around mt-5">
        <div>
          <div className="flex items-center">
            <box-icon color="#fff" name="wind"></box-icon>
            <span className="ml-2">{velocidad} km/h</span>
          </div>
          <div className="flex items-center">
            <box-icon type="solid" color="#fff" name="droplet-half"></box-icon>
            <span className="ml-2">{agua}%</span>
          </div>
          <div className="flex items-center">
            <box-icon type="solid" color="#fff" name="sun"></box-icon>
            <span>{solHora}</span>
          </div>
        </div>
        <span>{temp}º</span>
      </div>
    </div>
  );
};

export default CardMain;
