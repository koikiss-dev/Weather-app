import axios from "axios";

const getCity = async (req, res) => {
  const {
    query: { q },
  } = req;
  const URL = `https://api.openweathermap.org/data/2.5/weather?APPID=${process.env.WEATHER_KEY}&q=${q}&units=metric`;
  const response = await axios.get(URL);
  res.status(200).json({ data: response.data });
};
export default getCity;
