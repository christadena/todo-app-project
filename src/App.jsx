import { useState } from "react";
import "./App.css";
import ToDoItem from "./ToDoItem"; // Import the ToDoItem component

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  function closeAlert() {
    setShowAlert(false);
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    // Restrict adding empty items
    if (inputText.trim() === "") {
      setShowAlert(true);
      return;
    }

    setItems((prevItems) => {
      return [...prevItems, { text: inputText }];
    });
    setInputText("");
  }

  function deleteItem(index) {
    setItems((prevItems) => {
      return prevItems.filter((_, i) => i !== index); // Remove item at the given index
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
              <ToDoItem
                key={index}
                todoItem={todoItem}
                index={index}
                deleteItem={deleteItem} // Pass deleteItem instead of toggleComplete
              />
            ))}
          </ul>
        </div>

        {showAlert && (
          <div>
            <div>
              <p>
                Please enter a to-do item <br></br>before adding!
              </p>
              <button onClick={closeAlert}>OK</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
