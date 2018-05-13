function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  // pulls a .target out of #nested 
  var target = document.getElementsByClassName('target');
  return target
}

function increaseRankBy(n) {
  // incresases the ranks of all the .ranked-lists by n 
  // may need to us parseInt()
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-lists li')
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = [parseInt(lis[i].innerHTML) + n].toString()
  }
}

function deepestChild() {
  // pulls out the most deeply nestd child from div#grand-node
  
}