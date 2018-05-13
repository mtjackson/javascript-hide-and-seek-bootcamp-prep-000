function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  // pulls a .target out of #nested 
  var target = document.getElementsByClassName('target');
  return target[0]
}

function increaseRankBy(n) {
  // incresases the ranks of all the .ranked-lists by n 
  // may need to us parseInt()
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-lists li')
  
  for (let i = 0; i < lis.length; i++) {
    let x = parseInt(lis[i].innerHTML);
    lis[i].innerHTML = x + parseInt(n)
  }
}

function deepestChild() {
  // pulls out the most deeply nestd child from div#grand-node
  document.getElementById('grand-node');
  
}