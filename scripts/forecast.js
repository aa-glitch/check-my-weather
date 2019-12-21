const key = 'Jl63jjWuiAwrY9zOs5Ges87bBJa3DUGE';

// get weather key
const getWeather = async (cityKey) => {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${cityKey}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}

//get city key
const getCity = async (city) => {
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}
