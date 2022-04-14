import React from "react";

function RemoveBlockButton(props) {
  function onClickHandler(e) {
    props.onClick(props.title);
  }

  return (
    <>
      <button onClick={onClickHandler}>-</button>
    </>
  );
}

export default RemoveBlockButton;
