import React from "react";

const VND = (props) => {
  return (
    <div>
      <fieldset>
        <legend>VND</legend>
        <input
          type="number"
          value={props.value}
          onChange={(e) => props.setData(e.target.value)}
          style={{ color: props.value > 500000 ? "red" : "black" }}
          disabled={props.disabled}
        />
      </fieldset>
    </div>
  );
};

export default VND;
