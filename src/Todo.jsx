import { useState } from "react";

const Todo = ({ text, index, handleDelete, handleUpdate }) => {
  const [todoValue, setTodoValue] = useState(text);

  return (
    <div>
      <input
        type="text"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <p>{text}</p>
      <button onClick={() => handleUpdate(index, todoValue)}>Update</button>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </div>
  );
};

export default Todo;
