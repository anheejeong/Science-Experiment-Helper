import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Question from './components/Question/Question';
import List from './components/List/List';
import Safety from './components/Safety/Safety';

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
      {/* {!qna && <Question qnaClickHandler={qnaClickHandler} />}
      {qna && <List />} */}
      <BrowserRouter>
        <Routes>
          <Route path='/search' element={<Question />} />
          <Route path='/safety' element={<Safety />} />
          <Route path='/experiment' element={<List />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
