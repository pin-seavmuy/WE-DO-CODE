function rotate() {
    var lastChild = $('.slider div:last-child').clone();
    /*$('#test').html(lastChild)*/
    $('.slider div').removeClass('firstSlide')
    $('.slider div:last-child').remove();
    $('.slider').prepend(lastChild)
    $(lastChild).addClass('firstSlide')
  }
  
  function scrollLeft() {
    var firstChild = $('.slider div:first-child').clone();
    $('.slider div:first-child').remove();
    $('.slider').append(firstChild);
  }
  
  function scrollRight() {
    var lastChild = $('.slider div:last-child').clone();
    $('.slider div:last-child').remove();
    $('.slider').prepend(lastChild);
  }

  window.setInterval(function(){
    rotate()
  }, 4000);
  

