import React, { useState } from "react";
function List() {
  const [content, setContent] = useState("");
  const [items, setItems] = useState([]);
  function typing(event) {
    const b = event.target.value;
    setContent(b);
  }
  function Click(event) {
    setItems((preitem) => {
      return [...preitem, content];
    });
    event.preventDefault();
    setContent("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form onSubmit={Click}>
        <div className="form">
          <input onChange={typing} type="text" value={content} />
          <button>
            <span type="add">Add</span>
          </button>
        </div>
      </form>
      <div>
        <ul>
          {items.map((myitem) => (
            <li>{myitem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default List;
