import "../sass/errorDescription.scss";

const ErrorDescription = ({ message, code }) => {
  return (
    <div className="errorDescriptionContainer">
      <span>{code}</span>
      <p> {message}</p>
    </div>
  );
};

export default ErrorDescription;
