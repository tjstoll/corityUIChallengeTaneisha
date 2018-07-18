function togglePara(elem) {
  para = elem.getElementsByClassName('paragraph')[0];
  paraState = para.classList;

  if (paraState[1] == 'para-closed') {
    paraState.remove('para-closed');
    paraState.add('para-open');
  } else {
    paraState.remove('para-open');
    paraState.add('para-closed');
  }
}

function toggleAllItems(elem) {
  items = document.getElementsByClassName('paragraph');
  arrowState = elem.getElementsByClassName('fas')[0].classList;

  if (arrowState[1] == 'fa-angle-down') {
    arrowState.remove('fa-angle-down');
    arrowState.add('fa-angle-up');
    Array.from(items).forEach(function(item) {
      item.classList.remove('para-closed');
      item.classList.add('para-open');
    });
  } else {
    arrowState.remove('fa-angle-up');
    arrowState.add('fa-angle-down')
    Array.from(items).forEach(function(item) {
      item.classList.remove('para-open');
      item.classList.add('para-closed');
    });
  };
}

function trash() {
  alert("You've clicked 'trash'");
}
