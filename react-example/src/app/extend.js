String.prototype.ResetBlank = function() { //对字符串扩展
  alert(3);
 var regEx = /\s+/g;
 return this.replace(regEx, ' ');
 };
