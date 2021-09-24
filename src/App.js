import { useContext } from "react";
import { AppContext } from "./AppContext";
import ErrorPanel from "./components/ErrorPanel";

import Form from "./components/Form";
import WeatherPanel from "./components/WeatherPanel";

function App() {
  const { city, error } = useContext(AppContext);
  const weatherPanelComponent =
    Boolean(city) && !error ? <WeatherPanel /> : null;
  const errorPanelComponent = error ? <ErrorPanel /> : null;
  return (
    <div className="app">
      <Form />
      {weatherPanelComponent}
      {errorPanelComponent}
    </div>
  );
}

export default App;
