import React from 'react';
import './WeatherApp.css';

const WeatherApp = () => {
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type="text" className="cityINput" placeholder="Mars" />
      </div>
    </div>
  )
}

export default WeatherApp;
