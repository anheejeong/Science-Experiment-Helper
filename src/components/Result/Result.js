import React from "react";

const Result = (props) => {
    return (
        <li>
            <h2>{props.topic}</h2>
            <label>{props.hypothesis}</label>
        </li>
    );
}

export default Result;