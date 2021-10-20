import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Header} from './components/Header';
import {Add} from './components/Add';
import  {WatchList}  from './components/WatchList';
import {Watched} from './components/Watched';
import {GlobalProvider} from './context/GlobalState';
import './lib/css/all.min.css';

    function App() {
  return (
   <GlobalProvider>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <WatchList />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/watched">
          <Watched />
        </Route>
      </Switch>
    </Router>
  </GlobalProvider>
  );
}
 


export default App;
