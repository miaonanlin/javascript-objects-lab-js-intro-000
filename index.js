var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  Object[key]=value;
  retOrn object;
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object,{[key], value});
}


function deleteFromObjectByKey(object, key){
  var newly =  Object.assign({},object)
  delete newly[key]
  return newly
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
