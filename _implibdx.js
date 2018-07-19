var implibdx = implibdx || {};
implibdx.custom = new IMPLibDxCustom(["./css/IMPLibDxCore.js"]);

var dataTransfer = {};
var datatransferForm = function(item,arr){
  dataTransfer[item.name] = item.value;
}
