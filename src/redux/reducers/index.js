import {combineReducers} from 'redux';

import teams from './teams';
import fixtures from './fixtures';
import team from './team';


export default combineReducers({
  teams,
  fixtures,
  team
})