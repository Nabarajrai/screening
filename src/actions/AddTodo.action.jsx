export const addTodoAction = newTodo => {
  return {
    type: "ADD_TODO",
    payload: newTodo,
  };
};

export const deleteTodoAction = deleteTodo => {
  return {
    type: "REMOVE_TODO",
    payload: deleteTodo,
  };
};

export const completedTodoAction = completedTodo => {
  return {
    type: "COMPLETED_TODO",
    payload: completedTodo,
  };
};

export const editTodoAction = editTodo => {
  return {
    type: "EDIT_TODO",
    payload: editTodo,
  };
};
export const saveTodoAction = saveTodo => {
  return {
    type: "SAVE_TODO",
    payload: saveTodo,
  };
};
