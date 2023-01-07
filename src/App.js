import "./App.css";
import { useState } from "react";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos((p) => [...p, event.target["todo"].value]);
  };

  const onDelete = (index) => {
    setTodos((p) => [...p.slice(0, index), ...p.slice(index + 1)]);
  };

  const onUpdate = (index, value) => {
    setTodos((p) => [...p.slice(0, index), value, ...p.slice(index + 1)]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" />
        <button type="submit">Insert</button>
      </form>
      <div>
        {todos.map((todo, index) => (
          <Todo
            text={todo}
            index={index}
            handleDelete={onDelete}
            handleUpdate={onUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
