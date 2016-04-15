import { combineReducers } from 'redux'
import {
  EXAMPLE,
  ADDEXAMPLE,
  QUERYEXAMPLE
} from '../actions/example_action'

var exampleArray = [];

function exampleText(state = '', action) {
    switch (action.type) {
        case EXAMPLE:
        return action.data.status == "ok" ? "hehe":{};
        default:
          return state
    }
}
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
  exampleText,
  addExample,
  queryExample
})

export default exampleReducer
