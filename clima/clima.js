const axios = require('axios');

const getClima = async( lat, lng ) => {
  let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=f6adc86ff601e90302f4e6b7874193e5`)
  return resp.data.main.temp;
}

module.exports = {
  getClima
}
