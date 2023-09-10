import React from 'react';
import './WeatherApp.css';

const WeatherApp = () => {
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type="text" className="cityINput" placeholder="Mars" />
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
