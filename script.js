//some element selector and a click event...plain js works here too
$("div").click(function() {
    //returns an object {before: true/false, after: true/false}
    psuedoClick(this);

    //returns true/false
    psuedoClick(this).before;

    //returns true/false
    psuedoClick(this).after;

});

function psuedoClick(parentElem) {

    var beforeClicked,
      afterClicked;

  var parentLeft = parseInt(parentElem.getBoundingClientRect().left, 10),
      parentTop = parseInt(parentElem.getBoundingClientRect().top, 10);

  var parentWidth = parseInt(window.getComputedStyle(parentElem).width, 10),
      parentHeight = parseInt(window.getComputedStyle(parentElem).height, 10);

  var before = window.getComputedStyle(parentElem, ':before');

  var beforeStart = parentLeft + (parseInt(before.getPropertyValue("left"), 10)),
      beforeEnd = beforeStart + parseInt(before.width, 10);

  var beforeYStart = parentTop + (parseInt(before.getPropertyValue("top"), 10)),
      beforeYEnd = beforeYStart + parseInt(before.height, 10);

  var after = window.getComputedStyle(parentElem, ':after');

  var afterStart = parentLeft + (parseInt(after.getPropertyValue("left"), 10)),
      afterEnd = afterStart + parseInt(after.width, 10);

  var afterYStart = parentTop + (parseInt(after.getPropertyValue("top"), 10)),
      afterYEnd = afterYStart + parseInt(after.height, 10);

  var mouseX = event.clientX,
      mouseY = event.clientY;

  beforeClicked = (mouseX >= beforeStart && mouseX <= beforeEnd && mouseY >= beforeYStart && mouseY <= beforeYEnd ? true : false);

  afterClicked = (mouseX >= afterStart && mouseX <= afterEnd && mouseY >= afterYStart && mouseY <= afterYEnd ? true : false);

  return {
    "before" : beforeClicked,
    "after"  : afterClicked

  };      

}
