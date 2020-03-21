const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=18e5081def61f0712f027dff1d940555&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
};