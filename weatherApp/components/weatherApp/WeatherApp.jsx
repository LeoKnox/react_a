import React from 'react';
import './WeatherApp.css';

const WeatherApp = () => {
  const search = () => {
    const element = document.getElementsByuClassName("CittyInput")
    if (element[0].value==="")
    {
      return 0;
    }
    
  }
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type="text" className="cityInput" placeholder="Mars" />
      </div>
      <div className="weather-temp">24f</div>
      <div className="weather-location">Sapporo</div>
      <div className="data-container">
        <div className="element">
          <div className="humidty-percent">64%</div>
          <div className="text">Humidity</div>
        </div>
        <div className="element">
          <div className="humidty-percent">5 mph</div>
          <div className="text">Wind speed</div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp;
