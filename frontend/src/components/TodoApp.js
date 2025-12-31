import { useEffect, useState } from "react";

function TodoApp() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch("http://localhost:4000/api/todos");
    const data = await res.json();
    setTodos(data);
  };

  const addTodo = async () => {
    await fetch("http://localhost:4000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    setTitle("");
    setDescription("");
    fetchTodos();
  };

  return (
    <div>
      <h2>Add Todo</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <strong>{todo.title}</strong> - {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
