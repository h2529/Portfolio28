'use strict'

{
  const open = document.getElementById('open');
  const contents = document.getElementById('contents');
  const close = document.getElementById('close');


  open.addEventListener('click', () => {
    contents.classList.add('show');
    open.classList.add('hide');
    close.classList.add('show');
  });

  close.addEventListener('click', () => {
    contents.classList.remove('show');
    open.classList.remove('hide');
    close.classList.remove('show');
  });

  const open1 = document.getElementById('open1');
  const contents1 = document.getElementById('contents1');
  const close1 = document.getElementById('close1');


  open1.addEventListener('click', () => {
    contents1.classList.add('show');
    open1.classList.add('hide');
    close1.classList.add('show');
  });

  close1.addEventListener('click', () => {
    contents1.classList.remove('show');
    open1.classList.remove('hide');
    close1.classList.remove('show');
  });
}
