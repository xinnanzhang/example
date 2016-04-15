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
    // dispatch(queryExample());用来更新后台数据
  }
}

//删除
export const DELETEEXAMPLE = 'DELETEEXAMPLE';//获取visio 数据
export function emitDeleteExample(data) {
    return {
        type: DELETEEXAMPLE,
        data
    }
}
export function deleteExample(id){
  return dispatch => {
      let newArray = [];
     for(var i = 0;i< exampleArray.length;i++){
       if(i == id){
         continue;
       }
       newArray.push(exampleArray[i]);
     }
     console.log(newArray);
    // dispatch(
      // Array.remove(exampleArray,id)
    // )
    // dispatch(queryExample());用来更新后台数据
  }
}
