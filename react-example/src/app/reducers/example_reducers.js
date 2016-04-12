import { combineReducers } from 'redux'
import {
  SETTEXT
} from '../actions/example_action'

function loadVisioList(state = '', action) {
    switch (action.type) {
        case SETTEXT:
          return action.data;
        default:
          return state
    }
}

const exampleReducer = combineReducers({
  loadVisioList
})

export default exampleReducer
