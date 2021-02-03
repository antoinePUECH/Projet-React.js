import React from 'react';
import './sass/_app.scss';
import Header from './components/Header'
import Quizz1 from './components/Quizz1'
import Title from './components/Title'

function App() {
  return (
   <React.Fragment>

     <Header/>
     <Title txt="NOS QUIZZ"/>

   </React.Fragment>
  );
}

export default App;
