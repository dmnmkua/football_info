import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Container} from '@material-ui/core';

import {FETCH_FIXTURES} from '../../redux/actions/actionTypes';

import FixturesTable from './fixturesTable';

import './Fixtures.scss';

class Fixtures extends Component{

  componentDidMount() {
    this.props.onFetchFixturesLeague();
  }

  render() {
    return (
      <div className="fixtures">
        <Container>
          <h1>Fixtures</h1>
          <FixturesTable {...this.props} />
        </Container>
      </div>
    )
  }
}

export default connect(
  state => {
    const {fixtures, error, isLoading} = state.fixtures;

    return {
      fixtures,
      error,
      isLoading
    }
  },
  dispatch => ({
    onFetchFixturesLeague: () => {
      dispatch({
        type: FETCH_FIXTURES
      });
    }
  })
)(Fixtures)