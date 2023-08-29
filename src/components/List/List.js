import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Result from "../Result/Result";
import classes from './List.module.css';

const List = () => {
    const location = useLocation();

    console.log(location.state.form_data)

    return (
        <React.Fragment>
            <div className={classes.title}>
                <h1>search key word '{location.state.search}' Result</h1>
            </div>
            <ul>
                {location.state.form_data.map((data) => (
                    <Result
                        key={data.id}
                        topic={data.topic}
                        hypothesis={data.hypothesis}
                        materials={data.materials}
                        process={data.process}
                        result={data.result}
                    />
                ))}
            </ul>
        </React.Fragment>
    );
}

export default List;