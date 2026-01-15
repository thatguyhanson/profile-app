import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Build a List App", done: true },
  ]);

  const [input, setInput] = useState("");

  // Add item
  const addItem = () => {
    if (input.trim() === "") return;

    const newItem = {
      id: Date.now(),
      text: input,
      done: false,
    };

    setItems([...items, newItem]);
    setInput("");
  };

  // Toggle done
  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  // Delete item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const totalCount = items.length;
  const completedCount = items.filter((item) => item.done).length;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>List App</h1>
      <h3>
        Total: {totalCount} | Completed: {completedCount}
      </h3>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add item..."
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => toggleItem(item.id)}
            style={{
              cursor: "pointer",
              textDecoration: item.done ? "line-through" : "none",
            }}
          >
            {item.text}
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevents toggle
                deleteItem(item.id);
              }}
              style={{ marginLeft: "1rem" }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
