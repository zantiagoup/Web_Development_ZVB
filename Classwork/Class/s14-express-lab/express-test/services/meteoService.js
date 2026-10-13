export const getWeatherFrom = async (lat, long, cityName) => {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`;
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`Open-Meteo responded ${response.status}`);
    const data = await response.json();
    return `In ${cityName}, the current temp is ${data.current_weather.temperature} C`;
};
