import React, { useState, useRef } from "react";
import ErrorModal from "../Modal/ErrorModal";
import "./InputForm.css";

export default function InputForm(props) {
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser({
      username: enteredName,
      age: enteredAge,
    });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }
  function errorHandler() {
    setError(null);
  }
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form className="form-user" onSubmit={submitHandler}>
        <div className="form-user_field">
          <label htmlFor="name">Username</label>
          <input id="name" type="text" ref={nameInputRef} />
        </div>
        <div className="form-user_field">
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
