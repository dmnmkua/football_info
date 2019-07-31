import React, {useEffect} from 'react';
import {Container, Grid, Card, ButtonGroup, Button} from '@material-ui/core';
import {connect} from 'react-redux';

import FixturesTable from '../fixtures/fixturesTable';

import {
  FETCH_FIXTURES_LIVE,
  FETCH_FIXTURES_LIVE_PREMIER_LEAGUE,
  FETCH_BOOKMAKER_INFO,
  FETCH_STANDINGS
} from '../../redux/actions/actionTypes';

import './Home.scss';

const Home = props => {

  useEffect(() => {
    props.onFetchFixturesLive();
    props.onFetchBookmakerInfo(404);
    props.onFetchStanding();
  }, []);

  return(
    <div className="home">
      <Container>
        <h1>Home</h1>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Card className="home__column">
              <ButtonGroup variant="contained" className="home__btns-group">
                <Button variant="contained" onClick={props.onFetchFixturesLive}>
                  All
                </Button>

                <Button variant="contained" onClick={props.onFetchFixturesLivePrLeague}>
                  FA Premier League
                </Button>
              </ButtonGroup>

              <FixturesTable fixtures={props.fixturesLive} />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className="home__column">
              <h3>Standings</h3>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className="home__column">
              <h3>Odds</h3>

            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default connect(
  state => {
    const {fixturesLive, error: fixturesError, isLoading: fixtutesIsLoading} = state.fixturesLive;
    const {standings, error: standingsError, isLoading: standingsIsLoading} = state.standings;

    return {
      fixturesLive,
      fixturesError,
      fixtutesIsLoading,
      standings,
      standingsError,
      standingsIsLoading
    }
  },
  dispatch => ({
    onFetchFixturesLive: () => {
      dispatch({
        type: FETCH_FIXTURES_LIVE
      });
    },
    onFetchFixturesLivePrLeague: () => {
      dispatch({
        type: FETCH_FIXTURES_LIVE_PREMIER_LEAGUE
      });
    },
    onFetchBookmakerInfo: id => {
      dispatch({
        type: FETCH_BOOKMAKER_INFO,
        id
      });
    },
    onFetchStanding: () => {
      dispatch({
        type: FETCH_STANDINGS
      })
    }
  })
)(Home);