import { useContext, useState } from "react";

import { AppContext } from "../AppContext";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const { getCityName } = useContext(AppContext);

  const handleInputValue = (event) => setInputValue(event.target.value);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const city = inputValue;
    getCityName(city);
    setInputValue("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputValue}
        placeholder={"Wpisz miasto..."}
      />
      <button type="submit">Wybierz miasto</button>
    </form>
  );
};

export default Form;
