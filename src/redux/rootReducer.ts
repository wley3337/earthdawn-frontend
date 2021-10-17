import { combineReducers } from 'redux'

import { talents } from './Talents/reducer'

const rootReducer = combineReducers({ talents })

export default rootReducer
export type AppState = ReturnType<typeof rootReducer>
