import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import VisuallyHidden from "../VisuallyHidden";
import useEscapeKey from "../../hooks/escapeKeyHook";

import styles from "./ToastShelf.module.css";

function ToastShelf() {
  console.log("toastShelf rerender");

  const { modalList, deleteToast, clearToasts } =
    React.useContext(ToastContext);

  useEscapeKey(() => {
    clearToasts();
  });

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {modalList.map(({ id, variant, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} handleDismiss={() => deleteToast(id)}>
            <VisuallyHidden>{`${variant} - `}</VisuallyHidden>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
