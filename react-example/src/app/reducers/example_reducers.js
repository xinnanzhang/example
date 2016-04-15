import { combineReducers } from 'redux'
import {
  ADDEXAMPLE,
  QUERYEXAMPLE
} from '../actions/example_action'

function addExample(state = [], action) {
    switch (action.type) {
        case ADDEXAMPLE:
          return action.data;
        default:
          return state
    }
}
//查询更新数据
function queryExample(state = [], action) {
    switch (action.type) {
        case QUERYEXAMPLE:
          return action.data;
        default:
          return state
    }
}

const exampleReducer = combineReducers({
  addExample,
  queryExample
})

export default exampleReducer
