import exampleServices from '../services/example_services';

var exampleArray = [];

//查询
export const QUERYEXAMPLE = 'QUERYEXAMPLE';//获取visio 数据
export function emitQueryExample(data) {
    return {
        type: QUERYEXAMPLE,
        data
    }
}
export function queryExample(){
  return dispatch => {
    return dispatch(emitQueryExample(exampleArray));
  }
}

//添加
export const ADDEXAMPLE = 'ADDEXAMPLE';//获取visio 数据
export function emitAddExample(data) {
    return {
        type: ADDEXAMPLE,
        data
    }
}
export function addExample(obj){
  return dispatch => {
    dispatch(emitAddExample(exampleArray.push(obj)))
    dispatch(queryExample());
  }
}
