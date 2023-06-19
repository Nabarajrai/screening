import { useContext } from "react";
import CustomInput from "../customInput/CustomInput";
import TodoList from "../todoList/TodoList";
import { TodosContext } from "../../context/TodoContext";
import "./todo.css";

function TodoApp() {
  const { todoList, newTodoList, valueInput, handleChange } =
    useContext(TodosContext);
  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo app</h1>
      <div className="input-section">
        <form action="">
          <CustomInput
            type="text"
            name="todo"
            placeholder="List here ..."
            onChange={e => handleChange(e)}
            value={valueInput}
          />
          <button className="btn" onClick={newTodoList}>
            +
          </button>
        </form>
        <div className="todo-list">
          <TodoList todos={todoList} />
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
