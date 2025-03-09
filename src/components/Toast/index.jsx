import { useContext } from "react";

import { FaCheckCircle } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import { MdCancel } from "react-icons/md";

import { ToastContext } from "../../context/toastContext";

import "./Toast.css";

function Toast({ position }) {
  const { toastList, deleteToast } = useContext(ToastContext);

  function getSeverityClass(severity) {
    return severity === "error"
      ? "error"
      : severity === "warning"
      ? "warning"
      : "success";
  }

  return (
    <div className={`toast-container ${position ? position : ""}`}>
      {toastList.map((toast, i) => (
        <div
          key={i}
          className={`toast ${getSeverityClass(toast.severity)} ${
            position ? position : ""
          }`}
          style={{ "--progress": toast.progress }}
          onClick={() => deleteToast(toast.id)}
        >
          <div className={`toast-icon ${getSeverityClass(toast.severity)}`}>
            {toast.severity === "error" ? (
              <MdCancel />
            ) : toast.severity === "warning" ? (
              <IoMdAlert />
            ) : (
              <FaCheckCircle />
            )}
          </div>
          <div className="toast-text">
            <p className={"toast-title"}>{toast.title}</p>
            <p className={"toast-description"}>{toast.description}</p>
          </div>
        </div>
      ))}
      {/* <div className={`toast success`} style={{ "--progress": 0.5 }}>
        <div className="toast-icon success">
          <FaCheckCircle />
        </div>
        <div className="toast-text">
          <p className={"toast-title"}>Saved Successfully</p>
          <p className={"toast-description"}>
            Your changes have been saved successfully
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Toast;
