import { useContext } from "react";

import { AppContext } from "../AppContext";

const OtherParameters = ({ getTimeToShow }) => {
  const { dayOrNightStyles, weather } = useContext(AppContext);

  const {
    humidity,
    pressure,
    sunRise,
    sunSet,
    temperatureFeels,
    timezone,
    windSpeed,
  } = weather;

  const timeSunRise = getTimeToShow((sunRise + timezone) * 1000);
  const timeSunSet = getTimeToShow((sunSet + timezone) * 1000);

  const weatherPanelElementDayOrNightClass = dayOrNightStyles
    ? "otherParametersContainer__element"
    : "otherParametersContainer__element otherParametersContainer__element--night";

  return (
    <div className="otherParametersContainer">
      <div className={weatherPanelElementDayOrNightClass}>
        <p className="otherParametersContainer__element__description">
          Wschód słońca
          <span className="otherParametersContainer__element__description__value">
            {timeSunRise}
          </span>
        </p>
        <p className="otherParametersContainer__element__description">
          Zachód słońca
          <span className="otherParametersContainer__element__description__value">
            {timeSunSet}
          </span>
        </p>
      </div>
      <div className={weatherPanelElementDayOrNightClass}>
        <p className="otherParametersContainer__element__description">
          Prędkość wiatru
          <span className="otherParametersContainer__element__description__value">
            {windSpeed}km/h
          </span>
        </p>
        <p className="otherParametersContainer__element__description">
          Odczuwalna
          <span className="otherParametersContainer__element__description__value">
            {temperatureFeels.toFixed()}&deg;C
          </span>
        </p>
      </div>
      <div className="otherParametersContainer__element">
        <p className="otherParametersContainer__element__description">
          Wilgotność
          <span className="otherParametersContainer__element__description__value">
            {humidity}%
          </span>
        </p>
        <p className="otherParametersContainer__element__description">
          Ciśnienie
          <span className="otherParametersContainer__element__description__value">
            {pressure}hPa
          </span>
        </p>
      </div>
    </div>
  );
};

export default OtherParameters;
