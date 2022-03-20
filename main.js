'use strict'

{
  $(function() {
    pagetop.click(function (event) {
      event.preventDefault()
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });

  $(function() {
    $('#open1').on('click',function(event){
      event.preventDefault()
      $('#open1').hide(1000);
      $('#close1').show(1000);
      $('#contents1').show(1000);
    });
  
    $('#close1').on('click',function(event){
      event.preventDefault()
      $('#close1').hide(1000);
      $('#open1').show(1000);
      $('#contents1').hide(1000);
    });
  });

  $(function() {
    $('#open2').on('click',function(event){
      event.preventDefault()
      $('#open2').hide(1000);
      $('#close2').show(1000);
      $('#contents2').show(1000);
    });
  
    $('#close2').on('click',function(event){
      event.preventDefault()
      $('#close2').hide(1000);
      $('#open2').show(1000);
      $('#contents2').hide(1000);
    });
  });

  $(function() {
    $('#open3').on('click',function(event){
      event.preventDefault()
      $('#open3').hide(1000);
      $('#close3').show(1000);
      $('#contents3').show(1000);
    });
  
    $('#close3').on('click',function(event){
      event.preventDefault()
      $('#close3').hide(1000);
      $('#open3').show(1000);
      $('#contents3').hide(1000);
    });
  });

  $(function() {
    $('#open4').on('click',function(event){
      event.preventDefault()
      $('#open4').hide(1000);
      $('#close4').show(1000);
      $('#contents4').show(1000);
    });
  
    $('#close4').on('click',function(event){
      event.preventDefault()
      $('#close4').hide(1000);
      $('#open4').show(1000);
      $('#contents4').hide(1000);
    });
  });

}