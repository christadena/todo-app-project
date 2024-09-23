import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    // Restrict adding empty items
    if (inputText.trim() === "") {
      alert("no task given");
      return;
    }

    setItems((prevItems) => {
      return [...prevItems, { text: inputText, completed: false }];
    });
    setInputText("");
  }

  function toggleComplete(index) {
    setItems((prevItems) => {
      return prevItems.map((item, i) => {
        if (i === index) {
          return { ...item, completed: !item.completed }; // Toggle completed state
        }
        return item;
      });
    });
  }

  return (
    <div>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input onChange={handleChange} type="text" value={inputText} />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {items.map((todoItem, index) => (
              <li
                key={index}
                onClick={() => toggleComplete(index)}
                style={{
                  textDecoration: todoItem.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {todoItem.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
