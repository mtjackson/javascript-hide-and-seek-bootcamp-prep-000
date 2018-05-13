function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  // pulls a .target out of #nested 
  return document.getElementByClassName('target')
}

function increaseRankBy(n) {
  // incresases the ranks of all the .ranked-lists by n 
  // may need to us parseInt()
}

function deepestChild() {
  // pulls out the most deeply nestd child from div#grand-node
}