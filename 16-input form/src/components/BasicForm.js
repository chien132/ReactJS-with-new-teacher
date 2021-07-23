import useInput2 from "../hooks/use-input2";

const isNotEmpty = (value) => value.trim().length > 0;
const isEmail = (value) => value.trim().includes("@");

const BasicForm = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = useInput2(isNotEmpty);

  const {
    value: lNameValue,
    isValid: lNameIsValid,
    hasError: lNameHasError,
    inputChangeHandler: lNameInputChangeHandler,
    inputBlurHandler: lNameInputBlurHandler,
    reset: lNameReset,
  } = useInput2(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput2(isEmail);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(nameValue + " " + lNameValue);
    console.log(emailValue);
    nameReset();
    lNameReset();
    emailReset();
  };

  const nameClasses = nameHasError ? "form-control invalid" : "form-control";
  const lNameClasses = lNameHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const formIsValid = nameIsValid && lNameIsValid && emailIsValid;

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={nameValue}
            type="text"
            id="name"
          />
          {nameHasError && <p className="error-text">Name must not empty.</p>}
        </div>
        <div className={lNameClasses}>
          <label htmlFor="lName">Last Name</label>
          <input
            onChange={lNameInputChangeHandler}
            onBlur={lNameInputBlurHandler}
            value={lNameValue}
            type="text"
            id="lName"
          />
          {lNameHasError && <p className="error-text">Name must not empty.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={emailValue}
          type="text"
          id="email"
        />
        {emailHasError && (
          <p className="error-text">Email must not empty and has '@'.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
