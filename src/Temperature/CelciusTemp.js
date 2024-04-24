import React from "react";

const CelciusTemp = (props) => {
    return (
        <div>
            <input type="number" 
            placeholder="Enter your C" 
            onChange={(e) => props.setData(e.target.value)}
            value={props.value}
            />
        </div>
    );
};

export default CelciusTemp;