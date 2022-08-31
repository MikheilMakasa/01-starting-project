import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // USER INPUT VALIDATION LOGIC
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  // GETTING USER INPUT
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  // ON CLICKING OUT OF EMPTY INPUT FIELD
  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
