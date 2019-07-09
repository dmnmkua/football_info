import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import routes from './routes';

import Home from './pages/home/Home';
import Teams from './pages/teams';
import Team from './pages/team';
import Fixtures from './pages/fixtures';
import Odds from './pages/odds';

import {getTeams} from './redux/actions/teams';
import {getFixturesLeague} from './redux/actions/fixtures';

import Header from './components/header';

import './App.scss';


class App extends Component{
  componentDidMount() {
    this.props.onFetchTeams();
    this.props.onFetchFixturesLeague();
  }

  render() {
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
}

export default connect(
  state => ({
    state: state
  }),
  dispatch => ({
    onFetchTeams: () => {
      dispatch(getTeams());
    },
    onFetchFixturesLeague: () => {
      dispatch(getFixturesLeague());
    }
  })
)(App);
