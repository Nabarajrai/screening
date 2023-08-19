import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TodosContextProvider from "./context/TodoContext.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </Provider>
  </React.StrictMode>
);
