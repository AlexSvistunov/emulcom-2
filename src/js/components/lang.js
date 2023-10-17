const langBtn = document.querySelector('.user-nav__lang');
const langDrop = document.querySelector('.lang-dropdown');
const langDropItems = document.querySelectorAll('.lang-dropdown__item');
const langDropCurrent = document.querySelector('.current-lang');

langBtn.addEventListener('click', () => {
  langDrop.classList.toggle('active');
});

langDropItems.forEach(el => {
  el.addEventListener('click', () => {
    const currentText = langDropCurrent.innerHTML;
    langDropCurrent.innerHTML = el.innerHTML;
    el.innerHTML = currentText;
  });
});
