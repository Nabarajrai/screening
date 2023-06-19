import { PropTypes } from "prop-types";
import { useState, createContext, useCallback } from "react";
import uuid from "react-uuid";

export const TodosContext = createContext({
  todoList: [],
  valueInput: "",
  setTodoList: () => {},
  newTodoList: () => null,
  setValueInput: () => {},
  handleChange: () => {},
  ReSet: () => {},
});
const DEFAULT_TODOS = [];

const TodosContextProvider = ({ children }) => {
  const [valueInput, setValueInput] = useState("");
  const [todoList, setTodoList] = useState(DEFAULT_TODOS);
  const id = uuid();
  const handleChange = e => {
    setValueInput(e.target.value);
  };

  const newTodoList = useCallback(
    e => {
      e.preventDefault();
      if (valueInput !== "") {
        const todosList = {
          id: `${id}`,
          todo: `${valueInput}`,
          completed: false,
          isEditing: false,
        };
        setTodoList([...todoList, todosList]);
        ReSet();
      }
    },
    [valueInput, id, todoList]
  );

  const ReSet = () => {
    setValueInput("");
  };

  const values = {
    todoList,
    setTodoList,
    newTodoList,
    setValueInput,
    valueInput,
    handleChange,
  };

  return (
    <TodosContext.Provider value={values}>{children}</TodosContext.Provider>
  );
};
export default TodosContextProvider;

TodosContextProvider.propTypes = {
  children: PropTypes.object,
};
