import { useState } from "react";

const useGetvalue = () => {
  const [inputValue, setInputValue] = useState("");
  const onChange = e => {
    const { value } = e.target;
    setInputValue(value);
  };
  const reSet = () => {
    setInputValue("");
  };
  return { inputValue, reSet, onChange };
};

export default useGetvalue;
