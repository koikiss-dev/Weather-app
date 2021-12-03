import axios from 'axios'

const getData = async (req, res) =>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?APPID=${process.env.SECRET_KEY}&q=honduras`;
    const response = await axios.get(URL)
    res.status(200).json({data: response.data})
}
export default getData