import { combineReducers } from 'redux'
import {
  LOADVISIOLIST,
  SETTEXT
} from '../actions/example_action'

function loadVisioList(state = '', action) {
    switch (action.type) {
        case LOADVISIOLIST:
          return action.data;
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
