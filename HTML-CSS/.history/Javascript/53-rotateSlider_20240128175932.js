function rotate() {
    var lastChild = $('.slider ').clone();
    /*$('#test').html(lastChild)*/
    $('.slider div').removeClass('firstSlide')
    $('.slider div:last-child').remove();
    $('.slider').prepend(lastChild)
    $(lastChild).addClass('firstSlide')
  }
  
  window.setInterval(function(){
    rotate()
  }, 1000);
  