var headerFixeContainer = document.querySelector('.headerFixeContainer');

document.addEventListener('wheel', function(event) {
  if (event.deltaY > 0) {
    headerFixeContainer.style.marginTop = "-50px";
  } else if (event.deltaY < 0) {
    headerFixeContainer.style.marginTop = "";
  }
})