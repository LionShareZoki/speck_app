import React, { useState } from "react";

function List() {
  const [items, setItems] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { id: Date.now(), text: e.target[0].value };
    const inputValue = e.target[0].value.trim();
    if (inputValue !== "") {
      setItems([newItem, ...items]);
      e.target.reset();
    }
  }
  function handleClear() {
    setItems([]);
  }
  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="input_and_button">
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">Add</button>
          </form>
        </div>
        <div>
          <button onClick={handleClear}>Remove all items</button>
        </div>
      </div>
      <ul className="card-container">
        {items.map((item) => (
          <li
            className="card"
            key={item.id}
            onClick={() => handleRemoveItem(item.id)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
