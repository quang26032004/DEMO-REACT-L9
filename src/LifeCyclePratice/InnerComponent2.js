import React from "react";

const InnerComponent2 = (props) => {
  return (
    <div>
      <div>
        <button onClick={() => props.handlePageChange(1)}>Page 1</button>
        <button onClick={() => props.handlePageChange(2)}>Page 2</button>
      </div>
      <h1>InnerComponent2</h1>
      {props?.list?.data?.map((item) => {
        return(
            <ul key={item.id}>
                <li>{item.first_name}</li>
                <li>{item.last_name}</li>
                <li>{item.email}</li>
                <li>
                    <img src={item.avatar} alt="avatar" />
                </li>
            </ul>
        );
        }
        )}
    </div>
  );
};

export default InnerComponent2;
