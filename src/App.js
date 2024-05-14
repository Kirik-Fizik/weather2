import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './css/main.css';
import Layout from './components/Layout';

const API_Key = "06203c8f62b85ded2e6443ca0899dcb7";

function App() {

  const [isVisible, setIsVisible] = React.useState(false);
  function changeVisible() {
    setIsVisible(false);
  }

  const [isLoading, setLoading] = React.useState(true);

  const [city, setCity] = React.useState('Moscow');
  function changeCity (event) {
    setCity(event.target.value || "Moscow");
  }

  const [weather, setWeather] = React.useState();
  async function cityAndWeather () {
    try {
      setLoading(true);
      const koords = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_Key}`);
      const data = await koords.json();
      const lat = data[0].lat;
      const lon = data[0].lon;
      const currentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}`);
      const currentWeatherData = await currentWeather.json();
      console.log(currentWeatherData);
      setWeather(currentWeatherData);
      setLoading(false);
    } catch {
      setIsVisible(true);
    }
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const koords = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=Moscow&limit=5&appid=${API_Key}`);
      const data = await koords.json();
      const lat = data[0].lat;
      const lon = data[0].lon;
      const currentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}`);
      const currentWeatherData = await currentWeather.json();
      console.log(currentWeatherData);
      setWeather(currentWeatherData);
      setLoading(false);
   }
   fetchData();
  }, [])
  return (
    <Routes>
        <Route path="/" element={<Layout isVisible={isVisible} changeVisible={changeVisible} changeCity={changeCity} cityAndWeather={cityAndWeather} weather={weather} city={city} isLoading={isLoading}/>}>
        </Route>
    </Routes>
  );
}

export default App;