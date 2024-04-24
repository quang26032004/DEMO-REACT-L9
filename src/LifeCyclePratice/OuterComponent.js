import React from "react";
import { useEffect, useState } from "react";
import InnerComponent1 from "./InnerComponent1";

const OuterComponent = () => {

    const [userList, setUserList] = useState();
    const [pageNumber, setPage] = useState(1);

    const callApi = async () => {
        const data = await fetch(`https://reqres.in/api/users?page=${pageNumber}`);
        const result = await data.json();
        setUserList(result);
    };
    const handlePageChange = (page) => {
        console.log(page)
        setPage(page);
    };

    useEffect(() => {
        callApi();
    }, []);


    return (
        <div>
            <h1>OuterComponent</h1>
            <InnerComponent1 userList={userList} handlePageChange={handlePageChange} />
        </div>
    );
  
};

export default OuterComponent;