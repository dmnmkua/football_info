import React, { Component } from 'react';
import {TableRow, TableCell, Grid, Paper, CircularProgress} from '@material-ui/core';
import {Add} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import routes from '.././../routes';
import {fetchEvents} from '../../fetch';

export default class FixtureRow extends Component {
  state = {
    detailsOpen: false,
    events: [],
    loading: false
  }

  createRow = row => {
    const {
      homeTeam,
      goalsHomeTeam,
      goalsAwayTeam,
      awayTeam,
      event_date,
      status,
      venue
    } = row;

    const cells = [
      {
        id: 0,
        value: <Add className="fixture__icon--add" fontSize="large" onClick={() => this.showDetails(row.fixture_id)} />
      },
      {
        id: 1,
        value: <Link to={`${routes.teams}/${homeTeam.team_id}`} className="fixtures__link">
          {homeTeam.team_name}
          <img src={homeTeam.logo} alt={homeTeam.team_name} className="fixtures__img"/>
        </Link>,
        align: 'right'
      },
      {
        id: 2,
        value: `${goalsHomeTeam} - ${goalsAwayTeam}`,
        align: 'center'
      },
      {
        id: 3,
        value: <Link to={`${routes.teams}/${awayTeam.team_id}`} className="fixtures__link">
          <img src={awayTeam.logo} alt={awayTeam.team_name} className="fixtures__img"/>
          {awayTeam.team_name}
        </Link>,
        align: 'left'
      },
      {
        id: 4,
        value: `${new Date(event_date).getFullYear()}/${String(new Date(event_date).getMonth() + 1).padStart(2, '0')}/${String(new Date(event_date).getDate() + 1).padStart(2, '0')}
        ${String(new Date(event_date).getHours()).padStart(2, '0')}:${String(new Date(event_date).getMinutes()).padStart(2, '0')}`,
        align: 'center'
      },
      {
        id: 5,
        value: `${status}`,
        align: 'center'
      },
      {
        id: 6,
        value: `${venue}`,
        align: 'center'
      }
    ]

    return cells;
  }

  setEvents = async id => {
    this.setState({loading: true})
    const events = await fetchEvents(id)
    .then(({data}) => data.api.events)

    this.setState({events, loading: false});
  }

  showDetails = id => {
    this.setState(ps => ({
      detailsOpen: !ps.detailsOpen
    }), () => {
      this.state.detailsOpen  && !this.state.events.length && this.setEvents(id);
    })
  }

  render() {
    const {row} = this.props;
    const {detailsOpen, events, loading} = this.state;
    return(
      <>
      <TableRow>
      {
        this.createRow(row)
          .map(cell => (
          <TableCell key={cell.id} align={cell.align}>
            {cell.value}
          </TableCell>
        ))
      }
      </TableRow>

      <TableRow style={{'display': !detailsOpen ? 'none' : 'table-row'}}>
        <TableCell colSpan="7">
          {loading
          ? <CircularProgress/>
          : <Grid container spacing={3}>
            {events.map((event, index) => (
              <Grid item xs={3} key={index}>
                <Paper className="fixtures__event">
                  <h3>{event.elapsed} min</h3>
                  <p>Team: {event.teamName}</p>
                  <p>Player: {event.player}</p>
                  <p>Type event: {event.type}</p>
                  <p>Detail event: {event.detail}</p>
                </Paper>
              </Grid>
            ))}
          </Grid>
          }
        </TableCell>
      </TableRow>
      </>
    );
  }
}