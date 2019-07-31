import React, {useEffect} from 'react';
import {Container, Typography, List, ListItem, ListItemText, Paper, CircularProgress} from '@material-ui/core';
import {connect} from 'react-redux';

import {FETCH_BOOKMAKERS} from '../../redux/actions/actionTypes';

import './Odds.scss';

const Odds = props => {
  useEffect(() => {
    props.onFetchBookmakers();
  }, [])
  return (
    <div className="odds">
      <Container>
        <h1>Odds</h1>
        <Paper className="odds__wrapper">
          <Typography variant="h6">
            Bookmakers
          </Typography>
          {!props.isLoading
          ? <div>
            <List
              dense={true}>
              {
                props.bookmakers.map((bookmaker, index) => (
                  <ListItem key={bookmaker.id}>
                    <ListItemText
                      primary={`${index + 1}. ${bookmaker.name}`}
                    />
                  </ListItem>
                ))
              }
            </List>
          </div>
          : <CircularProgress/>}
        </Paper>
      </Container>
    </div>
  )
}

export default connect(
  state => {
    const {bookmakers, error, isLoading} = state.bookmakers;

    return {
      bookmakers,
      error,
      isLoading
    }
  },
  dispatch => ({
    onFetchBookmakers: () => {
      dispatch({
        type: FETCH_BOOKMAKERS
      })
    }
  })
)(Odds);