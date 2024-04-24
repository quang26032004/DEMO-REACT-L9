import React, {useState} from "react";
import FormComp from "./FormComp";
import ResComp from "./ResComp";

const InfoPage = () => {
    const [data, setData] = useState("");
    const onClick = (name) => {
        setData(name);
    };
    return (
        <div>
        <FormComp handleClick={onClick} />
        <ResComp  data={data}  />
        </div>
    );
    };

export default InfoPage;