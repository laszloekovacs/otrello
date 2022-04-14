/*
 *   Category boxes
 */

import React from "react";
import RemoveBlockButton from "./RemoveBlockButton";
import BlockOptions from "./BlockOptions";

function Block(props) {
  return (
    <div className="Block">
      <h2>{props.title}</h2>
      <RemoveBlockButton onClick={props.onRemove} title={props.title} />
      <BlockOptions></BlockOptions>
    </div>
  );
}

export default Block;
