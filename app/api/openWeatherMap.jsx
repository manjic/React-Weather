var axios = require('axios'); 

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9d5fd45138e19f178b0057f4161c24a4&units=metric';

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

		return axios.get(requestUrl).then(function (res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else{
				// return res.data.main.temp;
				 return {
           location: `${res.data.name}, ${res.data.sys.country}`,
           temp: Math.floor(res.data.main.temp)
        }
			};
		}, function  (res) {
			throw new Error(res.data.message);
		});
	}
}


// 9d5fd45138e19f178b0057f4161c24a4
// http://api.openweathermap.org/data/2.5/weather?appid=9d5fd45138e19f178b0057f4161c24a4&units=metric
