import { useContext } from "react";

import { AppContext } from "../AppContext";

const ExitButton = () => {
  const { handleCloseClick } = useContext(AppContext);

  return (
    <button onClick={handleCloseClick} className="exitButton">
      X
    </button>
  );
};

export default ExitButton;
