import { FiAlertCircle } from "react-icons/fi";

import "./Input.css";

function Input({ id, label, errorMessage, ...rest }) {
  return (
    <div className={errorMessage ? "input-wrapper error" : "input-wrapper"}>
      <label htmlFor={id ? id : ""}>{label}</label>
      <input {...{ id, ...rest }} />
      {errorMessage && (
        <div className="error-wrapper">
          <FiAlertCircle />
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Input;
