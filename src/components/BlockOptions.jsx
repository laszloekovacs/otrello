import React, { useState } from "react";

function BlockOptions(props) {
  const [isOpen, setOpen] = useState(false);

  function toggle(_) {
    setOpen(!isOpen);
  }

  if (isOpen) {
    return (
      <>
        <p>here are your options</p>
        <button onClick={toggle}>close</button>
      </>
    );
  } else {
    return <button onClick={toggle}>...</button>;
  }
}

export default BlockOptions;
