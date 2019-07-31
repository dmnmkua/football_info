import {takeEvery, put, call} from 'redux-saga/effects';
import {FETCH_BOOKMAKER_INFO} from '../actions/actionTypes';
// import {fetchBookmakerInfo} from '../../fetch';

import {
  requestBookmakerInfo,
  requestBookmakerInfoSuccess,
  requestBookmakerInfoFailure
} from '../actions/bookmakerInfo';

const mockBookmakerInfo = {
  data: {
    "api": {
      "results": 34,
      "odds": [
        {
          "fixture": {
            "league_id": 404,
            "fixture_id": 108705,
            "updateAt": 1557496046
          },
          "bookmakers": [
            {
              "bookmaker_id": 6,
              "bookmaker_name": "bwin",
              "bets": [
                {
                  "label_id": 1,
                  "label_name": "Match Winner",
                  "values": [
                    {
                      "value": "Home",
                      "odd": "2.20"
                    },
                    {
                      "value": "Draw",
                      "odd": "3.70"
                    },
                    {
                      "value": "Away",
                      "odd": "2.60"
                    }
                  ]
                },
                {
                  "label_id": 8,
                  "label_name": "Both Teams To Score",
                  "values": [
                    {
                      "value": "Yes",
                      "odd": "1.40"
                    },
                    {
                      "value": "No",
                      "odd": "2.75"
                    }
                  ]
                }
              ]
            },
            {
              "bookmaker_id": 1,
              "bookmaker_name": "10Bet",
              "bets": [
                {
                  "label_id": 1,
                  "label_name": "Match Winner",
                  "values": [
                    {
                      "value": "Home",
                      "odd": "2.30"
                    },
                    {
                      "value": "Draw",
                      "odd": "3.60"
                    },
                    {
                      "value": "Away",
                      "odd": "2.50"
                    }
                  ]
                },
                {
                  "label_id": 2,
                  "label_name": "Home/Away",
                  "values": [
                    {
                      "value": "Home",
                      "odd": "1.77"
                    },
                    {
                      "value": "Away",
                      "odd": "1.83"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}

function* watchBookmakerInfo() {
  yield takeEvery(FETCH_BOOKMAKER_INFO, worker);
}

function* worker(action) {
  try {
    yield put(requestBookmakerInfo());
    // const bookmakerInfo = yield call(() => fetchBookmakerInfo(action.id));
    const bookmakerInfo = yield call(() => new Promise(res => {
      setTimeout(() => res(mockBookmakerInfo), 1000)
    }));
    yield put(requestBookmakerInfoSuccess(bookmakerInfo))
  } catch(error) {
    yield put(requestBookmakerInfoFailure(error))
  }
}

export default watchBookmakerInfo;