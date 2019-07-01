import React from 'react';
import {Switch, Route} from 'react-router-dom';

import routes from './routes';

import Home from './pages/home/Home';
import Teams from './pages/teams';
import Fixtures from './pages/fixtures';
import Odds from './pages/odds';

import Header from './components/header';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>

      <Switch>
        <Route exact={true} path={routes.home} component={Home} />
        <Route path={routes.teams} component={Teams} />
        <Route path={routes.fixtures} component={Fixtures} />
        <Route path={routes.odds} component={Odds} />
      </Switch>
    </div>
  );
}

export default App;
