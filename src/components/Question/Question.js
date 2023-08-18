import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import classes from './Question.module.css';
import List from "../List/List";

const Question = props => {
    const [enteredQuestion, setEnteredQuestion] = useState('');
    const history = useNavigate()

    const questionChangeHandler = (event) => {
        setEnteredQuestion(event.target.value);
        console.log(enteredQuestion);
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        // const data = { question: enteredQuestion };

        // props.qnaClickHandler(data);

        // setEnteredQuestion('');

        try {
            await axios.get('http://localhost:5001/api/search/',
                { params: { search: enteredQuestion } },
                { withCredentials: true }
            )
                .then(res => {
                    console.log(res.data)
                    history('/experiment', { state: { form_data: res.data } })
                })
                .catch(e => {
                    alert('wrong details')
                })
        } catch (e) {
            console.log(e)
        }
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