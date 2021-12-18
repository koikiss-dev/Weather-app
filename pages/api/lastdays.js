import axios from "axios";

const getFiveDays = async (req, res) => {
  const {
    query: { q },
  } = req;
  const URL = `https://api.openweathermap.org/data/2.5/forecast?APPID=${process.env.WEATHER_KEY}&q=${q} `;
  const response = await axios.get(URL);
  res.status(200).json({ data: response.data });
};
export default getFiveDays;
