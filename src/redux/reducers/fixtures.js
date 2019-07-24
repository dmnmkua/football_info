export default function fixtures(state = null, action) {
  switch(action.type) {
    case 'FETCH_FIXTURES_LEAGUE':
      return action.payload;
    default:
      return state;
  }
}