import React, { useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const formReducer = (state, action) => {
  if (action.type === "email") {
    return {
      email: action.val,
      password: state.password,
      emailValid: action.val.includes("@"),
      passwordValid: state.passwordValid,
    };
  } else if (action.type === "password")
    return {
      password: action.val,
      email: state.email,
      passwordValid: action.val.trim().length > 6,
      emailValid: state.emailValid,
    };
};

// const passwordReducer = (state, action) => {
//   if (action.type === "USER_INPUT") {
//     return {
//       value: action.val,
//       isValid: action.val.trim().length > 6,
//     };
//   } else if (action.type === "INPUT_BLUR")
//     return {
//       value: state.value,
//       isValid: state.value.trim().length > 6,
//     };
// };
const Login = (props) => {
  // const [formIsValid, setFormIsValid] = useState(false);

  const [formState, dispatchForm] = useReducer(formReducer, {
    email: "",
    emailValid: null,
    password: "",
    passwordValid: null,
  });
  // const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
  //   value: "",
  //   isValid: null,
  // });

  // useEffect(() => {
  //   const myTimer = setTimeout(() => {
  //     console.log("Checking");
  //     setFormIsValid(emailState.isValid && passwordState.isValid);
  //   }, 500);
  //   return () => {
  //     console.log("Clean up");
  //     clearTimeout(myTimer);
  //   };
  // }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    dispatchForm({
      type: "email",
      val: event.target.value,
    });
    // setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchForm({
      type: "password",
      val: event.target.value,
    });
    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  // const validateEmailHandler = () => {
  //   dispatchEmail({ type: "INPUT_BLUR" });
  // };

  // const validatePasswordHandler = () => {
  //   dispatchPassword({ type: "INPUT_BLUR" });
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(formState.email, formState.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            formState.emailValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={emailChangeHandler}
            // onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            formState.passwordValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formState.password}
            onChange={passwordChangeHandler}
            // onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!(formState.emailValid && formState.passwordValid)}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
