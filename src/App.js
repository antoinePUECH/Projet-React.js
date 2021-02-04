
import React from 'react';
import './sass/_app.scss';
import Header from './components/Header'
import Quizz1 from './components/Quizz1'
import Title from './components/Title'
import Landing from './components/Landing'
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
   <React.Fragment>
    <Switch>
      <Route exact path="/">
        <Header/>
        <Title txt="NOS QUIZZ"/>
      </Route>
      <Route exact path="/quizz1">
        <Quizz1></Quizz1>
      </Route>
      <Route exact path="/landing">
        <Landing></Landing>
      </Route>
    </Switch>
   </React.Fragment>
  );
}

export default App;
