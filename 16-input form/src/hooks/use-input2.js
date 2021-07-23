import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT_CHANGE") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  } else if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  } else if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }
  return initialInputState;
};
const useInput2 = (checkValid) => {
  const [inputState, dispatchInput] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const isValid = checkValid(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const inputChangeHandler = (event) => {
    dispatchInput({
      type: "INPUT_CHANGE",
      value: event.target.value,
    });
  };

  const inputBlurHandler = () => {
    dispatchInput({ type: "INPUT_BLUR" });
  };

  const reset = () => {
    dispatchInput({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput2;
