import React from "react";

import Button from "../Button";
import { ToastContext } from "../ToastProvider";

// import styles from "./ToastForm.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastForm({ styles }) {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");

  const { createToast } = React.useContext(ToastContext);

  const submitRef = React.useRef();
  const messageRef = React.useRef();

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      submitRef.current.click();
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    createToast(variant, message);

    setMessage("");
    setVariant("notice");
    messageRef.current.focus();
  }

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              ref={messageRef}
              className={styles.messageInput}
              value={message}
              required
              onKeyDown={onEnterPress}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variantOption) => (
              <label key={variantOption} htmlFor={`variant-${variantOption}`}>
                <input
                  id={`variant-${variantOption}`}
                  type="radio"
                  name="variant"
                  value={variantOption}
                  checked={variant === variantOption}
                  onChange={() => {
                    setVariant(variantOption);
                  }}
                />
                {variantOption}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button ref={submitRef} type="submit">
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastForm;
