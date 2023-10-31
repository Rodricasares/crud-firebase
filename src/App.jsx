import "./App.css";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import "firebase/firestore";
import { db } from "./assets/data/firebase";
import { useEffect, useState } from "react";
import { Title } from "./assets/components/Title";
import { Todo } from "./assets/components/Todo";
import { AddTodo } from "./assets/components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  // Editar registro
  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };

  // Borrar o Eliminar

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos",id));
  };

  //
  const toggleComplete = async (todo)=>{
    await updateDoc(doc(db,"todos",todo.id),{completed:!todo.completed})
  }
  return (
    <div className="App">
     
      <div>
        {" "}
        <Title />
      </div>

      <div>
        <AddTodo />
      </div>

      <div className="todo_container">
        {todos.map((todo)=>(
          <Todo todo={todo} 
          handleDelete={handleDelete}
          toggleComplete={toggleComplete}
          
          />
        ))}

      </div>
    </div>
  );
}

export default App;
