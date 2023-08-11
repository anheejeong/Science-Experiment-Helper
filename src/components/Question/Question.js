import React, { useState } from "react";
import classes from './Question.module.css';

const Question = props => {
    const [enteredQuestion, setEnteredQuestion] = useState('');

    const questionChangeHandler = (event) => {
        setEnteredQuestion(event.target.value);
        console.log(enteredQuestion);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const data = { question: enteredQuestion };

        props.qnaClickHandler(data);

        setEnteredQuestion('');
    }

    return (
        <React.Fragment>
            <div className={classes.Q}>
                <div className={classes.logo}>
                    <h1>Science Experiment AI Helper</h1>
                </div>
                <div className={classes.questionBox}>
                    <form onSubmit={submitHandler}>
                        <label className={classes.label}>What kind of scientific experiment do you want to do?</label>
                        <input
                            value={enteredQuestion}
                            onChange={questionChangeHandler}
                            className={classes.input}
                            type="text"
                            placeholder="ex) Hydrogen Peroxide Catalytic Decomposition Experiment"
                        />
                        <div className={classes.submit}>
                            <button type="submit" className={classes.btn}>
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Question;