const key = 'u8AMdxA7vfUUEzJ4WxBQi3qmcPUp60OU';

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=&{key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    console.log(data);
};

getCity('manchester');