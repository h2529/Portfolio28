'use strict'

{

// topボタン
  $(function() {
    pagetop.click(function (event) {
      event.preventDefault()
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });

// コンテンツ要素 表示・非表示ボタン
  $(function() {
    $('#open1').on('click',function(event){
      event.preventDefault()
      $('#open1').hide(300);
      $('#close1').show(300);
      $('#contents1').show(1000);
    });
  
    $('#close1').on('click',function(event){
      event.preventDefault()
      $('#close1').hide(300);
      $('#open1').show(300);
      $('#contents1').hide(1000);
    });
  });

  $(function() {
    $('#open2').on('click',function(event){
      event.preventDefault()
      $('#open2').hide(300);
      $('#close2').show(300);
      $('#contents2').show(1000);
    });
  
    $('#close2').on('click',function(event){
      event.preventDefault()
      $('#close2').hide(300);
      $('#open2').show(300);
      $('#contents2').hide(1000);
    });
  });

  $(function() {
    $('#open3').on('click',function(event){
      event.preventDefault()
      $('#open3').hide(300);
      $('#close3').show(300);
      $('#contents3').show(1000);
    });
  
    $('#close3').on('click',function(event){
      event.preventDefault()
      $('#close3').hide(300);
      $('#open3').show(300);
      $('#contents3').hide(1000);
    });
  });

  $(function() {
    $('#open4').on('click',function(event){
      event.preventDefault()
      $('#open4').hide(300);
      $('#close4').show(300);
      $('#contents4').show(1000);
    });
  
    $('#close4').on('click',function(event){
      event.preventDefault()
      $('#close4').hide(300);
      $('#open4').show(300);
      $('#contents4').hide(1000);
    });
  });

// ヘッダー要素ボタン

}