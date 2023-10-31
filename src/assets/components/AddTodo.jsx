import { useState } from "react";
import { db } from "../data/firebase";
import { collection, addDoc } from "firebase/firestore";

export function AddTodo(){
  const [title, setTitle] = useState([]);
  const add = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };
  return (
    <form onSubmit={add}>
        <div>
      <input
        type="text"
        placeholder="Add task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div>
        <button>Add task</button>
      </div>
      </div>
    </form>

  );
}
