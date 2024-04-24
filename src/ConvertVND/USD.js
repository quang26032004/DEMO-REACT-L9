import React from "react";

const USD = (props) => {
    return (
        <div>
            <fieldset>
                <legend>USD</legend>
                <input
                    type="number"
                    value={props.value}
                    onChange={(e) => props.setData(e.target.value)}
                    disabled
                />
            </fieldset>

            
        </div>
    );
};

export default USD;