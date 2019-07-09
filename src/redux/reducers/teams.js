export default function teams(state = [], action) {
  switch(action.type) {
    case 'FETCH_TEAMS':
      return action.payload;
    default:
      return state;
  }
}