// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // if typeof is boolean OR if typeof is num OR if typeof is string
  var type = typeof obj;
  if (type === 'string') {
    return '"' + obj + '"';
  }

  if (type === 'number' || type === 'boolean') {
    return obj.toString();
  }

  if (Array.isArray(obj)) {
    var tempArray = [];
    for (var i = 0; i < obj.length; i++) {
      tempArray.push(stringifyJSON(obj[i]));
    }
    console.log('before: ', tempArray);
    tempArray.join(', ');

    console.log('after: ', tempArray);
    return '[' + tempArray + ']';
  }

  if (!obj) {
    return 'null';
  }

  if (type === 'object') {

    if (obj) {
      return '{}';
    }
    for (var key in obj) {
      return '{' + stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + '}';
    }
  }

  // if function

};
