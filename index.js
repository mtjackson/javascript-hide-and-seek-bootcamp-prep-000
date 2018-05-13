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
    lis[i] = lis[i + n];
    parseInt(n);
    lis[i].innerHTML = (x + n).toString()
  }
}

function deepestChild() {
  // pulls out the most deeply nestd child from div#grand-node
  let search = document.getElementById('grand-node').querySelectorAll('ul');
  let criteriaFn = (n === (search.length));
  let next = []
  let lastElement = search.length - 1;
  while (search) {
    if (search[lastElement]) {
      return search;
    }
    if (placeholder) {
      for (let i = 0; i < lastElement; i++) {
        next.push(current[i]);
      }
    }
  }
  
}