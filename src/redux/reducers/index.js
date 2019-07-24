import {combineReducers} from 'redux';

import teams from './teams';
import fixtures from './fixtures';
import fixturesLive from './fixturesLive';
import team from './team';
import bookmakerInfo from './bookmakerInfo';


export default combineReducers({
  teams,
  fixtures,
  fixturesLive,
  team,
  bookmakerInfo
})