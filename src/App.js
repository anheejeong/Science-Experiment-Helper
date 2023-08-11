import React, { useState, useEffect } from 'react';
import './App.css';

import Question from './components/Question/Question';
import List from './components/List/List';

function App() {
  let question;

  const [qna, setQna] = useState(false)

  useEffect(() => {
    setQna(false);
  }, [])

  const qnaClickHandler = (data) => {
    setQna(true);
    question = data.question;
    console.log(question);
  }

  return (
    <React.Fragment>
      {!qna && <Question qnaClickHandler={qnaClickHandler} />}
      {qna && <List />}
    </React.Fragment>
  );
}

export default App;
