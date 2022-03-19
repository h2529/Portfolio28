'use strict'

{
  
  $(function() {
    $('#open1').on('click',function(event){
      event.preventDefault()
      $('#open1').hide();
      $('#close1').show();
      $('#contents1').show();
    });
  
    $('#close1').on('click',function(event){
      event.preventDefault()
      $('#close1').hide();
      $('#open1').show();
      $('#contents1').hide();
    });
  });

  $(function() {
    $('#open2').on('click',function(event){
      event.preventDefault()
      $('#open2').hide();
      $('#close2').show();
      $('#contents2').show();
    });
  
    $('#close2').on('click',function(event){
      event.preventDefault()
      $('#close2').hide();
      $('#open2').show();
      $('#contents2').hide();
    });
  });

  $(function() {
    $('#open3').on('click',function(event){
      event.preventDefault()
      $('#open3').hide();
      $('#close3').show();
      $('#contents3').show();
    });
  
    $('#close3').on('click',function(event){
      event.preventDefault()
      $('#close3').hide();
      $('#open3').show();
      $('#contents3').hide();
    });
  });

  $(function() {
    $('#open4').on('click',function(event){
      event.preventDefault()
      $('#open4').hide();
      $('#close4').show();
      $('#contents4').show();
    });
  
    $('#close4').on('click',function(event){
      event.preventDefault()
      $('#close4').hide();
      $('#open4').show();
      $('#contents4').hide();
    });
  });


}