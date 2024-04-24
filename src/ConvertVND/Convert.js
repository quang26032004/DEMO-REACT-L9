import React, {useState} from "react";
import VND from "./VND";
import USD from "./USD";

const Convert = () => {
    const [vnd, setVnd] = useState(25000);

    const setData = (data) => {
        console.log("data", data);
        setVnd(Number(data));
    }

    let usd = vnd / 23000;

    return (
        <div>
            <div>
                <fieldset>
                    <legend>VND</legend>
                    <VND
                    setData={setData}
                    value={vnd}
                    disabled={usd > 3 || usd < 1}
                    />
                </fieldset>
            </div>

            <div>
                <fieldset>
                    <legend>USD</legend>
                    <USD
                    setData={setData}
                    value={usd}
                    /> 
                </fieldset>
            </div>

            <div>
                {usd > 3 ? <p>Không thể tăng nữa</p> : null}
                {usd < 1 ? <p>Không thể giảm nữa</p> : null}
            </div>
        </div>
    );
};

export default Convert;