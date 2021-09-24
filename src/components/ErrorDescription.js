const ErrorDescription = ({ message, code }) => {
  return (
    <div>
      <p>
        <span>{code}</span>
        {message}
      </p>
    </div>
  );
};

export default ErrorDescription;
