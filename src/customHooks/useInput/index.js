import { useState } from "react";

const useInput = (initialValue = "", checkFormat) => {
  const [value, setValue] = useState(initialValue);
  const [lostFocus, setLostFocus] = useState(false);

  const isValidFormat = checkFormat(value);
  const displayErrorMsg = !isValidFormat && lostFocus;

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onBlurHandler = (e) => {
    setLostFocus(true);
  };

  return {
    value,
    isValidFormat,
    displayErrorMsg,
    onChangeHandler,
    onBlurHandler,
  };
};

export default useInput;
