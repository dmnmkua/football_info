export default function fixturesLive(state = null, action) {
  switch(action.type) {
    case 'FETCH_FIXTURES_LIVE':
      return action.payload;
    case 'FETCH_FIXTURES_LIVE_PREMIER_LEAGUE':
        return action.payload;
    default:
      return state;
  }
}