import React, { useState } from "react";
import CelciusTemp from "./CelciusTemp";
import FarhenTemp from "./FarhenTemp";

const Main = (props) => {
    const [temp, setTemp] = useState(0);

    const setData = (data) => {
        console.log("data", data);
        setTemp(Number(data));
    }

    let celcius = temp;
    let fahrenheit = (temp * 9/5) + 32;

  return (
    <div>
      {/* celcius */}
      <div>
        <fieldset>
          <legend>Celcius</legend>
          <CelciusTemp  
          setData={setData}
          value={celcius}
          />
        </fieldset>
      </div>

      {/* fahrenheit */}
      <div>
        <fieldset>
          <legend>Fahrenheit</legend>
          <FarhenTemp 
          setData={setData}
          value={fahrenheit}
          />
        </fieldset>
      </div>
    </div>
  );
};

export default Main;
