// var oData = require('../server/odataVisio');
// import oData from '../server/odataVisio';

export const LOADVISIOLIST = 'LOADVISIOLIST';//获取visio 数据
export const SETTEXT = 'SETTEXT';//获取visio 数据

export function loadVisioList(data) {
    return {
        type: LOADVISIOLIST,
        data
    }
}

export function setText(data) {
    return {
        type: SETTEXT,
        data
    }
}

//外部调用
export function loadVisioList(){
  return dispatch => {
    return dispatch(oDataLoadVisioList());
  }
}

//内部调用
function oDataLoadVisioList(){
  return dispatch => {
    oData.loadVisioList(data => dispatch(isMytest(data)));
      // hehehe(data => dispatch(xixixi(data)));
  }
}

function isMytest(data){
  alert();
  alert(data);
  return dispatch => {
    return dispatch(setText(data.result));
  }
}
