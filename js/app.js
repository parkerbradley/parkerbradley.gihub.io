const cover = document.querySelector('.cover');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const formError = document.getElementById('form-error');

//----------- Helper Functions -----------//

//--- finds screen height and sets as coverImg height
function coverHeight() {
  cover.style.height = `${window.innerHeight}px`;
}

coverHeight();

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
target: '#navbar-example'
})

function formValidator() {
  let name = inputName.value;
  let email = inputEmail.value;
  if(name == "" || email == "") {
    formError.style.display = 'block';
  }
}


//----------- Tasks -----------//
var today = new Date();
var year = today.getFullYear();
document.getElementById('year').innerHTML = year;
