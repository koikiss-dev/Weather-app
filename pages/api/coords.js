import axios from "axios";

const getCoords = async (req, res) => {
  const {
    query: { lat, lon },
  } = req;
  const URL = `https://api.openweathermap.org/data/2.5/weather?APPID=${process.env.WEATHER_KEY}&lat=${lat}&lon=${lon}&units=metric`;
  const response = await axios.get(URL);
  res.status(200).json({ data: response.data });
};
export default getCoords;
