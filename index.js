function openCard() {
  var button = document.getElementById('button');
  
  if(button.innerHTML == 'Розгорнути відкритку') {
    button.innerHTML = 'Згорнути відкритку';
  } else {
    button.innerHTML = 'Розгорнути відкритку';
  }
  
  var cards = document.querySelectorAll('.card');
  for(var i = 0; i < cards.length; i++) {
    cards[i].classList.toggle('open');
  }
}