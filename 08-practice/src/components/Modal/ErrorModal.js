import classes from "../Modal/ErrorModal.module.css";
import React from "react";

export default function ErrorModal(props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </div>
    </div>
  );
}
