import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Container, Paper, Table, TableBody, TableHead, TableRow, TableCell, Grid, CircularProgress, TablePagination} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {fetchFixturesLeague} from '../../fetch';
import routes from '.././../routes';

import './Fixtures.scss';

class Fixtures extends Component{
  state = {
    page: 0
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
        value: <Link to={`${routes.teams}/${homeTeam.team_id}`} className="fixtures__link">
          {homeTeam.team_name}
          <img src={homeTeam.logo} alt={homeTeam.team_name} className="fixtures__img"/>
        </Link>,
        align: 'right'
      },
      {
        id: 1,
        value: `${goalsHomeTeam} - ${goalsAwayTeam}`,
        align: 'center'
      },
      {
        id: 2,
        value: <Link to={`${routes.teams}/${awayTeam.team_id}`} className="fixtures__link">
          <img src={awayTeam.logo} alt={awayTeam.team_name} className="fixtures__img"/>
          {awayTeam.team_name}
        </Link>,
        align: 'left'
      },
      {
        id: 3,
        value: `${new Date(event_date).getFullYear()}/${String(new Date(event_date).getMonth() + 1).padStart(2, '0')}/${String(new Date(event_date).getDate() + 1).padStart(2, '0')}
        ${String(new Date(event_date).getHours()).padStart(2, '0')}:${String(new Date(event_date).getMinutes()).padStart(2, '0')}`,
        align: 'center'
      },
      {
        id: 4,
        value: `${status}`,
        align: 'center'
      },
      {
        id: 5,
        value: `${venue}`,
        align: 'center'
      }
    ]

    return cells;
  }

  handleChangePage = (event, newPage) => {
    this.setState({page: newPage});
  }

  render() {
    const { page} = this.state;
    const {fixtures} = this.props;
    const headRows = [
      'Home Team',
      'Score',
      'Away Team',
      'Date',
      'Status',
      'Stadium'
    ];
    const rowsPerPage = 10;

    return (
      <div className="fixtures">
        <Container>
          <h1>Fixtures</h1>
          {fixtures.length
          ? <Paper className="fixtures__paper">
              <Table className="fixtures__table">
                <TableHead>
                  <TableRow>
                    {
                      headRows.map(item => <TableCell key={item} align='center'>{item}</TableCell>)
                    }
                  </TableRow>
                </TableHead>

                <TableBody>
                {
                  fixtures
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(row => (
                    <TableRow key={row.fixture_id}>
                    {
                      this.createRow(row)
                        .map(cell => (
                        <TableCell key={cell.id} align={cell.align}>
                          {cell.value}
                        </TableCell>
                      ))
                    }
                    </TableRow>
                  ))
                }
                </TableBody>

              </Table>

              <TablePagination
                rowsPerPageOptions={[rowsPerPage]}
                page={page}
                component="div"
                count={fixtures.length}
                rowsPerPage={rowsPerPage}
                onChangePage={this.handleChangePage}
               />
            </Paper>
          : <Grid container alignItems="center" justify="center" style={{marginTop: 100}}><CircularProgress /></Grid>}
        </Container>
      </div>
    )
  }
}

export default connect(
  state => ({
    fixtures: state.fixtures
  })
)(Fixtures)