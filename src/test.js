const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {
    interval: '5min',
    function: 'TIME_SERIES_INTRADAY',
    symbol: 'MSFT',
    datatype: 'json',
    output_size: 'compact'
  },
  headers: {
    'X-RapidAPI-Key': '9feba2bbd8msh5b6930a2401e5cep10a601jsn610328ab4017',
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}