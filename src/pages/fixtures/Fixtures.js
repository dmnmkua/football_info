import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Container, Paper, Table, TableBody, TableHead, TableRow, TableCell, Grid, CircularProgress, TablePagination} from '@material-ui/core';

import FixtureRow from './fixtureRow';

import './Fixtures.scss';

class Fixtures extends Component{
  state = {
    page: 0
  }

  handleChangePage = (event, newPage) => {
    this.setState({page: newPage});
  }

  render() {
    const { page} = this.state;
    const {fixtures} = this.props;
    const headRows = [
      'Details',
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
                    <FixtureRow row={row} key={row.fixture_id} />
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