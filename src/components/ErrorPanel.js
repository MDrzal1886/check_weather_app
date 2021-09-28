import { useContext } from "react";
import { AppContext } from "../AppContext";

import ErrorDescription from "./ErrorDescription";

import "../sass/errorPanel.scss";

import errorImage from "../img/error.svg";

const ErrorPanel = () => {
  const { errorCode, dayOrNightStyles, handleCloseClick } =
    useContext(AppContext);

  const getErrorDescription = () => {
    switch (errorCode) {
      case 401:
        return (
          <ErrorDescription message="Klucz jest nie aktywny" code={errorCode} />
        );
      case 404:
        return (
          <ErrorDescription
            message="Coś źle wpisane! Nie znajduję takiego miasta :("
            code={errorCode}
          />
        );
      case 429:
        return (
          <ErrorDescription
            message="Limit przekroczony! Spróbuj ponownie później"
            code={errorCode}
          />
        );
      default:
        return (
          <ErrorDescription
            message="Coś nie tak u mnie :( Przepraszam :("
            code={errorCode}
          />
        );
    }
  };

  const errorDescription = getErrorDescription();

  const errorPanelDayOrNightClass = dayOrNightStyles
    ? "errorPanelContainer"
    : "errorPanelContainer errorPanelContainer--night";

  return (
    <div className={errorPanelDayOrNightClass}>
      <img src={errorImage} alt="Błąd" />
      {errorDescription}
      <button
        onClick={handleCloseClick}
        className="errorPanelContainer__button"
      >
        X
      </button>
    </div>
  );
};

export default ErrorPanel;
