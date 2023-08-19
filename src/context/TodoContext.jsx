import { PropTypes } from "prop-types";
import { useState, createContext } from "react";

export const TodosContext = createContext({
  valueInput: "",
  handleChange: () => {},
  ReSet: () => {},
});

const TodosContextProvider = ({ children }) => {
  const [valueInput, setValueInput] = useState("");
  const handleChange = e => {
    setValueInput(e.target.value);
  };

  const ReSet = () => {
    setValueInput("");
  };

  const values = {
    valueInput,
    handleChange,
    ReSet,
  };

  return (
    <TodosContext.Provider value={values}>{children}</TodosContext.Provider>
  );
};
export default TodosContextProvider;

TodosContextProvider.propTypes = {
  children: PropTypes.object,
};
