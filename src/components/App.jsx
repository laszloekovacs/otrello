import React, { useState } from "react";
import Block from "./Block";

import AddCategory from "./AddCategory";

function App() {
  const [categories, setCategories] = useState([
    "Upcomming",
    "In progress",
    "Done",
  ]);

  function add(category) {
    setCategories([...categories, category]);
  }

  function remove(category) {
    const result = categories.filter((title) => title !== category);
    setCategories(result);
  }

  const blocks = categories.map((t, i) => (
    <Block key={i} title={t} onRemove={remove}></Block>
  ));

  return (
    <>
      <AddCategory onClick={add}></AddCategory>
      {blocks}
    </>
  );
}

export default App;
