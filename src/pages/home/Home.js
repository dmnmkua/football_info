import React, {useEffect} from 'react';
import {Container, Grid, Card, ButtonGroup, Button} from '@material-ui/core';
import {connect} from 'react-redux';

import FixturesTable from '../fixtures/fixturesTable';

import {getFixturesLive} from '../../redux/actions/fixturesLive';
import {getFixturesLivePrLeague} from '../../redux/actions/fixturesLivePrLeague';
import {getBookmakerInfo} from '../../redux/actions/bookmakerInfo';

import './Home.scss';

const Home = props => {

  useEffect(() => {
    props.onFetchFixturesLive();
    props.onFetchBookmakerInfo(2);
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
  state => ({
    fixturesLive: state.fixturesLive
  }),
  dispatch => ({
    onFetchFixturesLive: () => {
      dispatch(getFixturesLive());
    },
    onFetchFixturesLivePrLeague: () => {
      dispatch(getFixturesLivePrLeague());
    },
    onFetchBookmakerInfo: id => {
      dispatch(getBookmakerInfo(id));
    }
  })
)(Home);