const cover = document.querySelector('.cover');
const overlay = document.querySelector('.overlay');

//----------- Helper Functions -----------//

//--- finds screen height and sets as coverImg height
function coverHeight() {
  cover.style.height = `${window.innerHeight}px`;
  overlay.style.height = `${window.innerHeight}px`;
}

coverHeight();
