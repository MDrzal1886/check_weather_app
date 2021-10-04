import { useContext, useState } from "react";

import { AppContext } from "../AppContext";

import "../sass/form.scss";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [showInputHint, setShowInputHint] = useState(false);
  const { setCity, dayOrNightStyles } = useContext(AppContext);

  const handleInputValue = (event) =>
    setInputValue(event.target.value.toUpperCase());

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const city = inputValue;
    setCity(city);
    setInputValue("");
    setShowInputHint(false);
  };

  const handleOnFocus = () => {
    setShowInputHint(true);
  };

  const hint =
    "*Więcej miejsc o tej nazwie? Wpisz po przecinku symbol państwa (np. DUBLIN,IE)";

  const hintElement = showInputHint ? (
    <p className="formContainer__form__hint">{hint}</p>
  ) : null;

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
        {hintElement}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputValue}
          onFocus={handleOnFocus}
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
