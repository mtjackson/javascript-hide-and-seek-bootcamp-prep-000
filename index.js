function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  // pulls a .target out of #nested 
  var target = document.getElementsByClassName('target');
  return target[0]
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; i < lis.length; i++) {
    let x = parseInt(lis[i].innerHTML)
    lis[i].innerHTML = (parseInt(x + n)).toString()
  }
}


function deepestChild() {
  let allChildren = document.getElementById('app').querySelectorAll('div#grand-node');
  let deepestChild = allChildren[allChildren.length - 1]
  return allChildren[deepestChild].innerHTML
}

// document.querySelector('#grand-node div div div div')