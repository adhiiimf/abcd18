var newScroll = 0; // current scroll position
var oldScroll = 0; // previous scroll position
var speed; // how fast the window is scrolling in px per hz
var dropsHeight = $(".drops").outerHeight(); // the height of the sticky element

// get the speed of the scroll
function getSpeed() {
  speed = newScroll - oldScroll;
  return speed;
}

function moveDrops(speed) {
  var margin = parseInt($(".adnm").css("margin-top"));
  margin -= speed;
  // if the nav bar is already hidden, don't change the margin
  if (margin < -dropsHeight) {
    margin = -dropsHeight;
    $(".adnm").css("margin-top", margin + "px");
    // if the nav bar is already showing, don't change the margin
  } else if (margin > 0) {
    margin = 0;
    $(".adnm").css("margin-top", margin + "px");
    // if the nav bar is partially showing, set the top margin
  } else {
      $(".adnm").css("margin-top", margin + "px"); 
  };

}

// when the user scrolls the window
$(window).scroll(function() {
  newScroll = $(window).scrollTop();
  // get the speed
  speed = getSpeed();
  // set the margin of the nav bar
  moveDrops(speed);
  // update the old Scroll position
  oldScroll = newScroll;
})