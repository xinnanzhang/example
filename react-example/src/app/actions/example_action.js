import exampleServices from '../services/example_services';

export const EXAMPLE = 'EXAMPLE';//获取visio 数据

export function emitExample(data) {
    return {
        type: EXAMPLE,
        data
    }
}

//外部调用
export function getExample(){
  return dispatch => {
    return dispatch(emitExample({status:"ok"}));
  }
}

//内部调用
// function oDataLoadVisioList(){
//   return dispatch => {
//     exampleServices.loadVisioList(data => dispatch(isMytest(data)));
//       // hehehe(data => dispatch(xixixi(data)));
//   }
// }
//
// function isMytest(data){
//   alert();
//   alert(data);
//   return dispatch => {
//     return dispatch(setText(data.result));
//   }
// }
