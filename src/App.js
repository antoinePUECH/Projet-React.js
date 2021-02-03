import React from 'react';
import './sass/_app.scss';
import Header from './components/Header'
import Quizz1 from './components/Quizz1'

function App() {
  return (
   <React.Fragment>

     <Header/>

    <Quizz1></Quizz1>
   </React.Fragment>
  );
}

export default App;
