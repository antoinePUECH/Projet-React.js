import React from 'react';
import './sass/_app.scss';
import Header from './components/molecules/Header';
import Quizz1 from './components/organisms/Quizz1';
import Quizzs from './components/organisms/Quizzs';
import Landing from './components/organisms/Landing';
import {Switch, Route} from 'react-router-dom';
import ScoreShow from './components/organisms/ScoreShow';
import Quizz2 from './components/organisms/Quizz2';
import Quizz3 from './components/organisms/Quizz3';
import Quizz4 from './components/organisms/Quizz4';

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
      <Route exact path="/quizz2">
        <Quizz2></Quizz2>
      </Route>
      <Route exact path="/quizz3">
        <Quizz3></Quizz3>
      </Route>
      <Route exact path="/quizz4">
        <Quizz4></Quizz4>
      </Route>
      <Route exact path="/landing">
        <Landing></Landing>
      </Route>
      <Route exact path="/scoreShow">
        <ScoreShow></ScoreShow>
      </Route>
    </Switch>
   </React.Fragment>
  );
}

export default App;
