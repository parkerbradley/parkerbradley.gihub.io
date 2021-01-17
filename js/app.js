const cover = document.querySelector('.cover');

//----------- Helper Functions -----------//

//--- finds screen height and sets as coverImg height
function coverHeight() {
  cover.style.height = `${window.innerHeight}px`;
}

coverHeight();

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
target: '#navbar-example'
})
