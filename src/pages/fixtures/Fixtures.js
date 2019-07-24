import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Container} from '@material-ui/core';

import {getFixturesLeague} from '../../redux/actions/fixtures';

import FixturesTable from './fixturesTable';

import './Fixtures.scss';

class Fixtures extends Component{

  componentDidMount() {
    this.props.onFetchFixturesLeague();
  }

  render() {
    const {fixtures} = this.props;    

    return (
      <div className="fixtures">
        <Container>
          <h1>Fixtures</h1>
          <FixturesTable fixtures={fixtures} />
        </Container>
      </div>
    )
  }
}

export default connect(
  state => ({
      fixtures: state.fixtures
    }),
  dispatch => ({
    onFetchFixturesLeague: () => {
      dispatch(getFixturesLeague());
    }
  })
)(Fixtures)