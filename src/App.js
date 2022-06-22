import React from "react";
import "./App.css";
import TodoApp from "./components/TodoApp.js";

function App() {
  return (
    <div className="App">
      <span className="title">My To Do List</span> <br />
      <TodoApp />
    </div>
  );
}

export default App;