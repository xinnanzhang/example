var exampleServices = function(){}

Object.defineProperty(exampleServices, 'loadVisioList',{
  value: function(callBack) {
    var rObj = {
      state:"ok",
      result:"hello"
    };
    callBack(rObj);
    alert();
  }
});
module.exports = exampleServices;
