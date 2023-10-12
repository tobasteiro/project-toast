import React from "react";

import ToastShelf from "../ToastShelf";
import ToastForm from "../ToastForm";
import ToastProvider from "../ToastProvider";

import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastProvider>
        <ToastShelf />
        <ToastForm styles={styles} />
      </ToastProvider>
    </div>
  );
}

export default ToastPlayground;
