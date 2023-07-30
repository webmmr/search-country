/* eslint-disable react/prop-types */
const ErrorMessage = ({ message }) => {
  return (
    <p className="py-10">
      <span>⛔️</span> {message}
    </p>
  );
};

export default ErrorMessage;
