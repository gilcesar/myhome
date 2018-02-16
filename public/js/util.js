function FakeMap() {
  var data = [];
  
  function indexOf(key) {
    var i;
    for (i = 0; i < data.length; i++) {
      if (data[i].key === key) return i;
    }
    return -1;
  }
  function find(key) {
    var index = indexOf(key);
    return index < 0 ? null : data[index];
  }
  
  // the indexer
  function indexer(key, value) {
    var entry = find(key);
    
    if (arguments.length == 2) {
      if (entry) {
        entry.value = value;
      } else {
        entry = { key: key, value: value };
        data.push(entry);
      }
    }
    
    return entry.value;
  }
  
  indexer.remove = function (key) {
    var index = indexOf(key);
    if (index < 0) return false;
    data.splice(index, 1);
    return true;
  };
  
  indexer.size = function () {
    return data.length;
  };
  
  // return the function in the constructor. This is the main trick
  return indexer;
}