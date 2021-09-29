import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const KeyAPPID = process.env.REACT_APP_API_KEY;

const AppProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [errorCode, setErrorCode] = useState(0);
  const [weather, setWeather] = useState({
    code: "",
    description: "",
    humidity: 0,
    pressure: 0,
    sunRise: 0,
    sunSet: 0,
    temperature: 0,
    temperatureFeels: 0,
    timezone: 0,
    windSpeed: 0,
  });
  const [dayOrNightStyles, setDayOrNightStyles] = useState(true);

  useEffect(() => {
    const APIurl = `http://api.openweathermap.org/data/2.5/weather?q=${city},&units=metric&APPID=${KeyAPPID}&lang=pl`;
    if (city.length > 0) {
      fetch(APIurl)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            setErrorCode(response.status);
            return;
          }
        })
        .then((data) => {
          return setWeather({
            code: data.weather[0].icon,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            sunRise: data.sys.sunrise,
            sunSet: data.sys.sunset,
            temperature: data.main.temp,
            temperatureFeels: data.main.feels_like,
            timezone: data.timezone,
            windSpeed: data.wind.speed,
          });
        })
        .catch(() => {
          setError(true);
          return;
        });
    }
  }, [city]);

  const handleCloseClick = () => {
    setWeather({
      code: "",
      description: "",
      humidity: 0,
      pressure: 0,
      sunRise: 0,
      sunSet: 0,
      temperature: 0,
      temperatureFeels: 0,
      timezone: 0,
      windSpeed: 0,
    });
    setError(false);
    setCity("");
    setErrorCode(0);
  };

  return (
    <AppContext.Provider
      value={{
        city,
        error,
        errorCode,
        handleCloseClick,
        setCity,
        weather,
        dayOrNightStyles,
        setDayOrNightStyles,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
