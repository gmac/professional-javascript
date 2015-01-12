var form = document.querySelector('#form');
var input = document.querySelector('#color-field');
var brush = document.querySelector('.brush');

form.addEventListener('submit', function(evt){
  evt.preventDefault(); // Otherwise submitting a form reloads the page
  brush.style.backgroundColor = input.value;
});

for( var i = 0; i < 8000; i++){
  var div = document.createElement('div');
  div.classList.add('square');
  div.addEventListener('mouseover', function(){
    this.style.backgroundColor = brush.style.backgroundColor;
  });
  document.body.appendChild(div);
}

