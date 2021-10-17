import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'
import { History } from 'history'

import { EARTHDAWN_URL } from '../../util/baseUrls'
import { getXCSRFToken } from '../../util/cookie'
import { logout } from '../Logout/actions'
import {
    GET_ALL_TALENTS,
    SET_ALL_TALENTS,
    Talent,
    SetTalentAction,
    GetAllTalentsAction,
} from './types'

export const setAllTalents = (talents: Talent[]): SetTalentAction => ({
    type: SET_ALL_TALENTS,
    payload: talents,
})

export const getAllTalents = (history: History): GetAllTalentsAction => ({
    type: GET_ALL_TALENTS,
    payload: { history },
})
export function* watchGetAllTalents() {
    yield takeEvery(GET_ALL_TALENTS, handleGetAllTalents)
}
function* handleGetAllTalents(action: GetAllTalentsAction) {
    const history = action.payload.history
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'X-CSRF-TOKEN': getXCSRFToken(),
            },
        }

        const res: { data: Talent[]; status: number } = yield axios.get<
            Talent[]
        >(EARTHDAWN_URL + '/v1/talents', config)

        // success
        if (res.status === 200) {
            yield put(setAllTalents(res.data))
        } else {
            // status code
            console.error('error', { statusCode: res.status })
        }
    } catch (err) {
        // if the token has expired log out the user
        yield put(logout(history))
        // log error incase the error is not that the user's token has expired
        console.error('Error getting all talents', err)
    }
}
