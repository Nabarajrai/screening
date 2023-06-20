const localStorageKey = "todolist";

export const setTodolistInLocalStorage = (todolist) => {
    localStorage.setItem(localStorageKey, JSON.stringify(todolist));
};
export const getTodolistInLocalStorage = () => {
    return JSON.parse(localStorage.getItem(localStorageKey));
 };