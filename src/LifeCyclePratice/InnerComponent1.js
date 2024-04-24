import React from "react";
import InnerComponent2 from "./InnerComponent2";

// đã lấy dữ liệu từ API ở OuterComponent.js
//giờ sẽ lấy dữ liệu từ OuterComponent.js truyền vào InnerComponent1.js và hiển thị ra màn hình
//truyền dữ liệu từ OuterComponent.js vào InnerComponent1.js thông qua props

const InnerComponent1 = (props) => {

    return (
        <div>
            
            <InnerComponent2 userList={props.userList} handlePageChange={props.handlePageChange} />

        </div>
    );
};

export default InnerComponent1;