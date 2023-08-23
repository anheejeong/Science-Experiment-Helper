import React from "react";
import classes from './Result.module.css';
import Card from "../Card/Card";

const Result = (props) => {
    return (
        <Card>
            <li className={classes.result}>
                <h2>{props.topic}</h2>
                <label>{props.hypothesis}</label>
            </li>
        </Card>
    );
}

export default Result;