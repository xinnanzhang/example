import { combineReducers } from 'redux'
import {
  EXAMPLE
} from '../actions/example_action'

function exampleText(state = '', action) {
    switch (action.type) {
        case EXAMPLE:
        return action.data.status == "ok" ? "hehe":{};
        default:
          return state
    }
}

const exampleReducer = combineReducers({
  exampleText
})

export default exampleReducer
