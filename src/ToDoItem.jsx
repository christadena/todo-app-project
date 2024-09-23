import React, { useState } from "react";

function ToDoItem({ todoItem, index, deleteItem }) {
  const [completed, setCompleted] = useState(false); // Local state for completion

  const handleComplete = (event) => {
    event.stopPropagation(); // Prevent the click from bubbling up to the <li>
    setCompleted((prev) => !prev); // Toggle completed state
  };

  return (
    <div>
      <li>
        <span
          className="text"
          style={{
            textDecoration: completed ? "line-through" : "none",
          }}
        >
          {todoItem.text}
        </span>
        <div className="buttons">
          <button onClick={handleComplete} className="completeButton">
            ✔️
          </button>
          <button onClick={() => deleteItem(index)} className="deleteButton">
            ❌
          </button>
        </div>
      </li>
    </div>
  );
}

export default ToDoItem;
