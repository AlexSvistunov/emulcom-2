const burger = document.querySelector('.burger');
const pageBody = document.querySelector('.page__body');
// const nav = document.querySelector('.nav');
// const userNav = document.querySelector('.user-nav');
const menu = document.querySelector('.menu')
const menuClose = document.querySelector('.menu__close');
burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  pageBody.classList.add('locked');
});


menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
  pageBody.classList.remove('locked')
});
