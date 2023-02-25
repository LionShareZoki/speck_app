import React, { useState } from "react";

function List() {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value.trim();
    if (inputValue !== "") {
      const newItem = { id: Date.now(), text: inputValue };
      setItems((prevItems) => [newItem, ...prevItems]);
      e.target.reset();
    }
  };

  const handleClear = () => {
    setItems([]);
  };

  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const renderItems = () => {
    return items.map((item) => (
      <li
        key={item.id}
        className="card fade-in"
        onClick={() => handleRemoveItem(item.id)}
      >
        {item.text}
      </li>
    ));
  };

  return (
    <div>
      <div className="input_and_button">
        <form onSubmit={handleSubmit}>
          <div className="input_container">
            <input type="text" placeholder="Enter new technologies..." />
            <button type="submit" className="add_button">
              ADD
            </button>
          </div>
        </form>
        <div className="button_holder">
          <button onClick={handleClear} className="clear_button">
            Remove all items
          </button>
        </div>
      </div>
      <ul className="card-container">{renderItems()}</ul>
    </div>
  );
}

export default List;
