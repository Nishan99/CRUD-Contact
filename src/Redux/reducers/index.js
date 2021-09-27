import {combineReducers} from 'redux'
import personReducers from './personReducer'

const allReducers=combineReducers({
    userData: personReducers
})

export default allReducers