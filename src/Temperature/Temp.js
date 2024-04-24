import React from "react";

const Temp = (props) => {
    return (
        <div>
            <input type="number" 
            placeholder="Enter your F" 
            onChange={(e) => props.setData(e.target.value)}
            />
        </div>
    );
};

export default Temp;