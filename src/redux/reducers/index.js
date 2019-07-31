import {combineReducers} from 'redux';

import teams from './teams';
import fixtures from './fixtures';
import fixturesLive from './fixturesLive';
import team from './team';
import bookmakerInfo from './bookmakerInfo';
import standings from './standings';
import bookmakers from './bookmakers';

export default combineReducers({
  teams,
  fixtures,
  fixturesLive,
  team,
  bookmakerInfo,
  standings,
  bookmakers
})