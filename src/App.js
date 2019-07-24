import React from 'react';
import {Switch, Route} from 'react-router-dom';

import routes from './routes';

import Home from './pages/home/Home';
import Teams from './pages/teams';
import Team from './pages/team';
import Fixtures from './pages/fixtures';
import Odds from './pages/odds';

import Header from './components/header';

import './App.scss';


const App = () => {

  return (
    <div className="App">
      <Header/>

      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.teams} component={Teams} />
        <Route path={`${routes.teams}/:id`} component={Team} />
        <Route path={routes.fixtures} component={Fixtures} />
        <Route path={routes.odds} component={Odds} />
      </Switch>
    </div>
  );
}

export default App;
