export default function bookmakerInfo(state = [], action) {
  switch(action.type) {
    case 'FETCH_BOOKMAKER_INFO':
      return action.payload;
    default:
      return state;
  }
}