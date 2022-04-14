import React, { useState } from "react";

function AddCategory(props) {
  const [text, setText] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          name="category"
          id="category"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.onClick(text);
            setText("");
          }}
        >
          Add Category
        </button>
      </form>
    </div>
  );
}

export default AddCategory;
