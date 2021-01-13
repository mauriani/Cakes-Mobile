import {Alert} from 'react-native';
import {call, select, put, all, takeLatest} from 'redux-saga/effects';

import api from '../../../services/api';

function* login({username, password}) {
  // buscar dados na api
  const response = yield call(api.get, `/user`);

  yield all(
    response.map((item) => {
      if (item.name === username && item.password === password) {
      }
    }),
  );
}
