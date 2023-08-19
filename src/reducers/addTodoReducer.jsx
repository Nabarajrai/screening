const inittialTodos = {
  todos: [],
};
export const addTodoReducer = (state = inittialTodos, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO": {
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    }
    case "REMOVE_TODO": {
      return {
        todos: payload,
      };
    }
    case "COMPLETED_TODO": {
      return {
        todos: payload,
      };
    }
    case "EDIT_TODO": {
      return {
        todos: payload,
      };
    }
    case "SAVE_TODO": {
      return {
        todos: payload,
      };
    }
    default:
      return state;
  }
};
