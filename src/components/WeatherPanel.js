import { useContext } from "react";

import { AppContext } from "../AppContext";

import OtherParameters from "./OtherParameters";

import "../sass/weatherPanel.scss";

import cloudsDay from "../video/cloudsDay.mp4";
import cloudsNight from "../video/cloudsNight.mp4";
import clearSky from "../video/clearSky.mp4";
import clearSkyNight from "../video/clearSkyNight.mp4";
import mist from "../video/mist.mp4";
import mistNight from "../video/mistNight.mp4";
import rain from "../video/rain.mp4";
import rainNight from "../video/rainNight.mp4";
import snow from "../video/snow.mp4";
import snowNight from "../video/snowNight.mp4";
import thunderstorm from "../video/thunderstorm.mp4";

const WeatherPanel = () => {
  const { dayOrNightStyles, handleCloseClick, city, weather } =
    useContext(AppContext);

  const { code, description, temperature, timezone } = weather;

  const getVideo = () => {
    if (code) {
      switch (code) {
        case "11d":
          return thunderstorm;
        case "11n":
          return thunderstorm;
        case "02d":
          return cloudsDay;
        case "03d":
          return cloudsDay;
        case "04d":
          return cloudsDay;
        case "02n":
          return cloudsNight;
        case "03n":
          return cloudsNight;
        case "04n":
          return cloudsNight;
        case "09d":
          return rain;
        case "10d":
          return rain;
        case "09n":
          return rainNight;
        case "10n":
          return rainNight;
        case "13d":
          return snow;
        case "13n":
          return snowNight;
        case "50d":
          return mist;
        case "50n":
          return mistNight;
        case "01d":
          return clearSky;
        case "01n":
          return clearSkyNight;
        default:
          return;
      }
    }
  };

  const videoSrc = getVideo();

  const date = new Date().getTime() + timezone * 1000;

  const getTimeToShow = (date) => {
    const minutes = Math.floor((date / (1000 * 60)) % 60);
    const hours = Math.floor((date / (1000 * 60 * 60)) % 24);

    return `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
  };

  const timeToShow = getTimeToShow(date);

  const weatherContainerDayOrNightClass = dayOrNightStyles
    ? "weatherPanelContainer"
    : "weatherPanelContainer weatherPanelContainer--night";

  const weatherPanelStrongDayOrNightClass = dayOrNightStyles
    ? "weatherPanelContainer__panel__strong"
    : "weatherPanelContainer__panel__strong weatherPanelContainer__panel__strong--night";

  return (
    <div className={weatherContainerDayOrNightClass}>
      <video
        autoPlay
        loop
        muted
        playsInline
        src={videoSrc}
        type="video/mp4"
        className="weatherPanelContainer__video"
      ></video>
      <div className="weatherPanelContainer__panel">
        <h1>{city.toUpperCase()}</h1>
        <p className="weatherPanelContainer__panel__timeAndDescription">
          {timeToShow}
        </p>
        <p className="weatherPanelContainer__panel__timeAndDescription">
          {description}
        </p>
        <strong className={weatherPanelStrongDayOrNightClass}>
          {temperature.toFixed()}&deg;C
        </strong>
        <OtherParameters getTimeToShow={getTimeToShow} />
        <button onClick={handleCloseClick} className="exitButton">
          X
        </button>
      </div>
    </div>
  );
};

export default WeatherPanel;
