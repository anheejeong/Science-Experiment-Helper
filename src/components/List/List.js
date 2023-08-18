import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Result from "../Result/Result";

const List = () => {
    const location = useLocation();

    console.log(location.state.form_data)

    return (
        <React.Fragment>
            <ul>
                {location.state.form_data.map((data) => (
                    <Result
                        key={data.id}
                        topic={data.topic}
                        hypothesis={data.hypothesis}
                    />
                ))}
            </ul>
        </React.Fragment>
    );
}

export default List;