import { useContext } from "react";
import { AppContext } from "../AppContext";

import ErrorDescription from "./ErrorDescription";

import errorImage from "../img/error.svg";

const ErrorPanel = () => {
  const { errorCode, handleCloseClick } = useContext(AppContext);

  const getErrorDescription = () => {
    switch (errorCode) {
      case 401:
        return (
          <ErrorDescription message="Klucz jest nie aktywny" code={errorCode} />
        );
      case 404:
        return (
          <ErrorDescription
            message="Coś źle wpisałeś! Nie ma takiego miasta :("
            code={errorCode}
          />
        );
      case 429:
        return (
          <ErrorDescription
            message="Limit wyszukań przekroczony! Spróbuj ponownie później"
            code={errorCode}
          />
        );
      default:
        return (
          <ErrorDescription
            message="Coś nie tak u nas :( Przepraszamy :("
            code={errorCode}
          />
        );
    }
  };

  const errorDescription = getErrorDescription();

  return (
    <div>
      <img src={errorImage} alt="Błąd" />
      {errorDescription}
      <button onClick={handleCloseClick}>X</button>
    </div>
  );
};

export default ErrorPanel;
