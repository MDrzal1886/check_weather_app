import { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import { AppContext } from "./AppContext";
import ErrorPanel from "./components/ErrorPanel";

import Form from "./components/Form";
import WeatherPanel from "./components/WeatherPanel";

import backgroundDay from "./img/backgroundDay.jpg";
import backgroundNight from "./img/backgroundNight.jpg";

import "./sass/app.scss";

function App() {
  const { city, error, setDayOrNightStyles, dayOrNightStyles } =
    useContext(AppContext);
  const weatherPanelComponent =
    Boolean(city) && !error ? <WeatherPanel /> : null;
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

  const styleObject = {
    backgroundImage: `url(${
      dayOrNightStyles ? backgroundDay : backgroundNight
    })`,
  };

  return (
    <div className="app" style={styleObject}>
      {FormComponent}
      {weatherPanelComponent}
      {errorPanelComponent}
    </div>
  );
}

export default App;
