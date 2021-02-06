import React from 'react';
import './sass/_app.scss';
import Header from './components/Header';
import Quizz1 from './components/Quizz1';
import Quizzs from './components/Quizzs';
import Landing from './components/Landing';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
   <React.Fragment>
     <Header/>
    <Switch>
    <Route exact path="/">
        <Landing></Landing>
      </Route>
      <Route exact path="/quizzs">
        <Quizzs></Quizzs>
      </Route>
      <Route exact path="/quizz1">
        <Quizz1></Quizz1>
      </Route>
    </Switch>
   </React.Fragment>
  );
}

export default App;
