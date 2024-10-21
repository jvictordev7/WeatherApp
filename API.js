// API.js
const API_KEY = 'd7v7ai14QjZhTDAuZVoVl'; // Adicione sua chave de API aqui
const BASE_URL = 'https://data.api.xweather.com/forecasts/';

const fetchWeather = async (city) => {
  try {
    const response = await fetch(`${BASE_URL}${city},mn?format=json&client_id=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar os dados do tempo.');
    }
    const data = await response.json();
    return data; // Ajuste conforme a estrutura do retorno da API
  } catch (error) {
    throw new Error(error.message);
  }
};

export default fetchWeather;
