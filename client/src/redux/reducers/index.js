//ALL REDUCERS

import {combineReducers} from 'redux'
import users from './usersReducer'

export default combineReducers({

    alluser:users
})