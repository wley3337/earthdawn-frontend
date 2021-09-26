import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';
import { EARTHDAWN_URL } from '../../util/baseUrls';
import { GET_ALL_TALENTS, SET_ALL_TALENTS, Talent, SetTalentAction } from './types';

interface ErrorResponse {
  message: string;
}

export const setAllTalents = (talents: Talent[]): SetTalentAction => ({ type: SET_ALL_TALENTS, payload: talents });

export const getAllTalents = () => ({ type: GET_ALL_TALENTS });
export function* watchGetAllTalents() {
  yield takeEvery(GET_ALL_TALENTS, handleGetAllTalents);
}
function* handleGetAllTalents() {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };

    const res: { data: Talent[] | ErrorResponse; status: number } = yield axios.get<Talent[]>(
      EARTHDAWN_URL + '/v1/talents',
      config
    );

    // success
    if (res.status === 200) {
      console.log({ talents: res.data });
    } else {
      // status code
      console.error('error', { statusCode: res.status });
    }
  } catch (err) {
    console.error('Error getting all talents', err);
  }
}
