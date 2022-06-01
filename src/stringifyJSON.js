// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // if typeof is boolean OR if typeof is num OR if typeof is string
  var type = typeof obj;
  if (type === 'string') {
    return '"' + obj + '"';
  } else if (type === 'number' || type === 'boolean') {
    return obj.toString();
  } else if (Array.isArray(obj)) {
    var tempArray = [];
    for (var i = 0; i < obj.length; i++) {
      tempArray.push(stringifyJSON(obj[i]));
    }
    tempArray.join(', ');

    return '[' + tempArray + ']';
  } else if (!obj) {
    return 'null';
  } else if (type === 'object' && obj) {
    var result = [];
    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + result + '}';
  } else {
    return obj;
  }

  // if function

};