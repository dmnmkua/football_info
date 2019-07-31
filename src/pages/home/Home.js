import React, {useEffect} from 'react';
import {Container, Grid, Card, ButtonGroup, Button, Paper} from '@material-ui/core';
import {connect} from 'react-redux';

import FixturesTable from '../fixtures/fixturesTable';

import StandingCard from './StandingCard';

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
          <Grid item md={6} xs={12}>
            <Card className="home__column">
              <h3>Standings</h3>
              {
                props.standings.map(standing => (
                  <StandingCard key={standing.rank} standing={standing} />
                ))
              }
            </Card>
          </Grid>
          <Grid item md={6} xs={12}>
            <Card className="home__column">
              <h3>Odds</h3>
              {
                !!props.bookmakerInfo.length && props.bookmakerInfo[0].bookmakers.map(bookmaker => (
                  <Paper key={bookmaker.bookmaker_id} className="home__paper">
                    <h5>
                      Bookmaker: {bookmaker.bookmaker_name}
                    </h5>
                    <ul>
                      {
                        bookmaker.bets.map((bet, index) => (
                          <li key={index}>
                            {bet.label_name}:
                            <ul>
                              {
                                bet.values.map((value, index) => (
                                  <li key={index}>
                                    {value.value}: {value.odd}
                                  </li>
                                ))
                              }
                            </ul>
                          </li>
                        ))
                      }
                    </ul>
                  </Paper>
                ))
              }
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
    const {bookmakerInfo, error: bookmakerInfoError, isLoading: bookmakerInfoIsLoading} = state.bookmakerInfo;
    bookmakerInfo.length && console.log(bookmakerInfo[0].bookmakers);

    return {
      fixturesLive,
      fixturesError,
      fixtutesIsLoading,
      standings,
      standingsError,
      standingsIsLoading,
      bookmakerInfo,
      bookmakerInfoError,
      bookmakerInfoIsLoading
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