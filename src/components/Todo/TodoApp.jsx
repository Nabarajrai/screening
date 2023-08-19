import { useContext } from "react";
import CustomInput from "../customInput/CustomInput";
import TodoList from "../todoList/TodoList";
import { TodosContext } from "../../context/TodoContext";
import "./todo.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodoAction } from "../../actions/AddTodo.action";
import uuid from "react-uuid";

function TodoApp() {
  const { valueInput, handleChange, ReSet } = useContext(TodosContext);
  const id = uuid();
  const dispatch = useDispatch();
  const { todos } = useSelector(state => state.todos);

  const handleButton = e => {
    e.preventDefault();
    if (valueInput !== "") {
      const newTodo = {
        id: `${id}`,
        todo: `${valueInput}`,
        completed: false,
        isEditing: false,
      };
      dispatch(addTodoAction(newTodo));
      ReSet();
    }
  };

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
          <button
            className="btn"
            onClick={e => handleButton(e, id, valueInput)}
          >
            +
          </button>
        </form>
        <div className="todo-list">
          <TodoList todos={todos} />
        </div>
        <div className="todo-list-complete">
          {/* <TodoList todos={todos} /> */}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
