import { useState } from "react";

export function Todo({ todo, handleDelete, toggleComplete, handleEdit }) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const handleChange = (e) => {
    if (todo.complated === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        value={todo.title === "" ? newTitle : todo.title}
        onChange={handleChange}
      />
      <div>
        <button style={{ color: "green" }} onClick={() => toggleComplete(todo)}>
          Tick
        </button>
        <button
          style={{ color: "blue" }}
          onClick={() => handleEdit(todo, newTitle)}
        >
          Edit
        </button>
        <button style={{ color: "red" }} onClick={() => handleDelete(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
