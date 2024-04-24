import React from "react";

const FarhenTemp = (props) => {
    return (
        <div>
            <input type="number" 
            placeholder="Enter your F" 
            onChange={(e) => props.setData(e.target.value)}
            value={props.value}
            />
        </div>
    );
};

export default FarhenTemp;