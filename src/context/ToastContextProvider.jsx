import { useState, useCallback, useEffect } from "react";

import { ToastContext } from "./toastContext";

export function ToastContextProvider({ children }) {
  const [toastList, setToastList] = useState([]);

  const displayTime = 4000;

  const toastListPush = useCallback((options) => {
    /* options = {
      title: String,
      description: String,
      severity: "success" || "warning" || "error",
    } */
    setToastList((prevState) => [
      ...prevState,
      {
        ...options,
        id: prevState.length + 1,
        visibleSince: new Date(),
        progress: 1,
      },
    ]);
  }, []);

  const deleteToast = useCallback(
    (id) => {
      setToastList((prevState) => prevState.filter((toast) => toast.id !== id));
    },
    [setToastList]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) {
        setToastList((prevState) =>
          prevState.map((toast) => {
            const timeVisible = new Date() - toast.visibleSince;
            const progress = 1 - timeVisible / displayTime;
            if (progress <= 0) {
              deleteToast(toast.id);
            }
            return {
              ...toast,
              progress,
            };
          })
        );
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, deleteToast]);

  return (
    <ToastContext.Provider
      value={{
        toastList,
        toastListPush,
        deleteToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}
