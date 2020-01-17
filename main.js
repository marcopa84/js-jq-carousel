$(document).ready(
  function () {
    $('.next').click(
      function () {
        clickNext();
      }
    )
    $('.prev').click(
      function () {
        clickPrev();
      }
    )
    $(document).keydown(
      function(){
        console.log(event.keycode);
        console.log(event.which);
        if (event.which == 39 || event.keycode == 39){
          clickNext();
          console.log('prende avanti');
        }
        else if (event.which == 37 || event.keycode == 37){
          clickPrev();
          console.log('prende dietro');
        }
      }
    );
  }
);

function clickNext () {
  var imageActive = $('img.active');
  var imageNext = imageActive.next();
  var circleActive = $('i.active');
  var circleNext = circleActive.next();

  if (imageActive.hasClass('last') == true){
    imageActive.removeClass('active')
    $('img.first').addClass('active');
    circleActive.removeClass('active');
    $('i.first').addClass('active');
  } else {
    imageActive.removeClass('active');
    imageNext.addClass('active');
    circleActive.removeClass('active');
    circleNext.addClass('active');
  }

}
function clickPrev () {
  var imageActive = $('img.active');
  var imagePrev = imageActive.prev();
  var circleActive = $('i.active');
  var circlePrev = circleActive.prev();

  if (imageActive.hasClass('first') == true){
    imageActive.removeClass('active')
    $('img.last').addClass('active');
    circleActive.removeClass('active');
    $('i.last').addClass('active');
  } else {
    imageActive.removeClass('active');
    imagePrev.addClass('active');
    circleActive.removeClass('active');
    circlePrev.addClass('active');
  }
}
