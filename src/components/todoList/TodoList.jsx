import React, { useContext,useState ,useEffect} from "react";
import { PropTypes } from "prop-types";
import CustomRadio from "../customRadio/CustomRadio";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { FiSave } from "react-icons/fi";
import { TodosContext } from "../../context/TodoContext";
import "./todoList.css";

const TodoList = ({ todos }) => {
  const [selectTodo,setSelectTodo] = useState("");
  const [newTodo,setNewTodo] = useState();
  const { setTodoList } = useContext(TodosContext);
  useEffect(()=>{
    setNewTodo(selectTodo);
  },[selectTodo])
  const DeleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodoList(newTodos);
  };
  const handleCheckMark = (e, id) => {
    const updateTodos = todos.map(data => {
      if (data.id === id) {
        return { ...data, completed: e.target.checked };
      }
      return data;
    });
    setTodoList(updateTodos);
  };
  const handleEditTodo = id => {
    const updateEditTodo = todos.map(data => {
      if (data.id === id) {   
        setSelectTodo(data.todo);
        return { ...data, isEditing: true };
      }
      return data;
    });
    setTodoList(updateEditTodo);
  };
  const handleChange = (e)=>{
    setNewTodo(e.target.value);
  }
  const saveTodo=(id)=>{
     const newTodos  = todos.map(data=>{
      if(data.id === id){
        return {...data,todo: newTodo,isEditing: false};
      }
      return data;
    })
    setTodoList(newTodos); 
  };
  return (
    <div className="todoList-container">
      <ul>
        {todos.map(data => (
          <React.Fragment key={data.id}>
            <li>
              <div className="custom-checkbox">
                <CustomRadio
                  type="checkbox"
                  onChange={e => handleCheckMark(e, data.id)}
                />
              </div>
              <div
                id="para"
                className={`todos-name ${
                  data.completed ? "paragraph-active" : ""
                }`}
              >
                {data.isEditing ? (
                  <div className="editing">
                    <input
                      id="edit"
                      type="text"
                      onChange={e => handleChange(e)}
                      value={newTodo}
                    />
                    <span className="icon" onClick={()=>saveTodo(data.id)}>
                      <FiSave className="save" />
                    </span>
                  </div>
                ) : (
                  data.todo
                )}
              </div>
              <div className="icons">
                <span className="icon" onClick={() => DeleteTodo(data.id)}>
                  <AiFillDelete className="delete" />
                </span>
                <span className="icon" onClick={() => handleEditTodo(data.id)}>
                  <BiEdit className="edit" />
                </span>
              </div>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
