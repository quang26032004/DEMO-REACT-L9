import React, {useState} from "react";

const FormComp = (props) => {
    const [name, setName] = useState("");
    
    return (
        <div>
        <h3>Name: </h3>
        <input type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => props.handleClick(name)}>
            Submit
        </button>
        </div>
    );
    };

export default FormComp;