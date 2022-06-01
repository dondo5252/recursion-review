// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  // your code here
  //create empty array all nodes

  var nodes = [];
  node = node || document.body;
  //split nodes by classname
  var elements = node.classList;
  console.log(elements);
  //if classname exists in html elements
  if (elements.contains(className)) {
    //add nodes  to nodes array
    nodes.push(node);
  }
  // var called child  = getElementsByClassName(className, node.Children[i])
  console.log('childNode, ', node.childNodes);
  for (var i = 0; i < node.childNodes.length; i++) {
    console.log('Loop, ', node.childNodes[i]);
    var child = getElementsByClassName(className, node.childNodes[i]);
    nodes = nodes.concat(child);
  }
  //array nodes = nodes.concat(child)
  return nodes;
};
