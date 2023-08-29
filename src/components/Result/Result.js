import React from "react";
import classes from './Result.module.css';
import Card from "../Card/Card";

const Result = (props) => {
    console.log(props)

    return (
        <Card>
            <li className={classes.result}>
                <h2>{props.topic}</h2>
                <div>
                    <label><b>Hypotheses : </b>{props.hypothesis}</label><br />
                </div>
                <div>
                    <label><b>Materials : </b>{props.materials}</label><br />
                </div>
                <div>
                    <label><b>Process : </b>{props.process}</label><br />
                </div>
                <div>
                    <label><b>Result : </b>{props.result}</label>
                </div>
            </li>
        </Card>
    );
}

export default Result;