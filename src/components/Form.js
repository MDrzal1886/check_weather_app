import { useContext, useState } from "react";

import { AppContext } from "../AppContext";

import "../sass/form.scss";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const { setCity, dayOrNightStyles } = useContext(AppContext);

  const handleInputValue = (event) =>
    setInputValue(event.target.value.toUpperCase());

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const city = inputValue;
    setCity(city);
    setInputValue("");
  };

  const inputDayOrNightClass = dayOrNightStyles
    ? "formContainer__form__input"
    : "formContainer__form__input formContainer__form__input--night";

  const formContainerDayOrNightClass = dayOrNightStyles
    ? "formContainer"
    : "formContainer formContainer--night";

  const formDayOrNightClass = dayOrNightStyles
    ? "formContainer__form"
    : "formContainer__form formContainer__form--night";

  const buttonDayOrNightClass = dayOrNightStyles
    ? "formContainer__form__button"
    : "formContainer__form__button formContainer__form__button--night";

  return (
    <div className={formContainerDayOrNightClass}>
      <form onSubmit={handleOnSubmit} className={formDayOrNightClass}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputValue}
          placeholder="Wpisz miejsce..."
          className={inputDayOrNightClass}
        />
        <button type="submit" className={buttonDayOrNightClass}>
          sprawdź
        </button>
      </form>
    </div>
  );
};

export default Form;
