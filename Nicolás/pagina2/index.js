var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

btn.onclick = function() {
  modal.style.display = "block";
  setTimeout(function() {
    modal.style.display = "none";
    window.close();
  }, 2000);


}
//
// window.onscroll = function() {myFunction()};
// Get the header
// var header = document.getElementById("navbar");
// Get the offset position of the navbar
// var sticky = header.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//  if (window.pageYOffset > sticky) {
//    header.classList.add("sticky");
//  } else {
//    header.classList.remove("sticky");
//  }
//}