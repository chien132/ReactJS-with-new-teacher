import React, { useState } from "react";
import ErrorModal from "../Modal/ErrorModal";
import "./InputForm.css";

export default function InputForm(props) {
  const [inputUsername, setInputUsername] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setInputUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();
    if (inputUsername.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+inputAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser({
      username: inputUsername,
      age: inputAge,
    });
    setInputUsername("");
    setInputAge("");
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
          <input
            id="name"
            type="text"
            value={inputUsername}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className="form-user_field">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={inputAge}
            onChange={ageChangeHandler}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
