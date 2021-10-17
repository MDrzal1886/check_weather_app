import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
import ErrorPanel from "./components/ErrorPanel";

import Form from "./components/Form";
import WeatherPanel from "./components/WeatherPanel";

import "./sass/app.scss";

function App() {
  const { city, error, setDayOrNightStyles, dayOrNightStyles, weather } =
    useContext(AppContext);
  const weatherPanelComponent =
    Boolean(city) && !error && Boolean(weather.code) ? <WeatherPanel /> : null;
  const errorPanelComponent = error ? <ErrorPanel /> : null;
  const FormComponent = !Boolean(city) ? <Form /> : null;
  const houers = new Date().getHours();

  useEffect(() => {
    if (houers >= 19 || houers <= 5) {
      if (dayOrNightStyles) {
        setDayOrNightStyles(false);
      }
    } else if (houers <= 19 || houers >= 5) {
      if (!dayOrNightStyles) {
        setDayOrNightStyles(true);
      }
    }
  }, [setDayOrNightStyles, dayOrNightStyles, houers]);

  const addDayOrNightClass = dayOrNightStyles
    ? "app--backgroundDay"
    : "app--backgroundNight";

  return (
    <div className={`app ${addDayOrNightClass}`}>
      {FormComponent}
      {weatherPanelComponent}
      {errorPanelComponent}
    </div>
  );
}

export default App;
