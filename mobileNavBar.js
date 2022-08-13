const body = document.querySelector('body')
const hamburguerOpen = document.querySelector('.hamburguerOpen')
const hamburguerClose = document.querySelector('.hamburguerClose')
const navMenu = document.querySelector('.containerNav')

hamburguerOpen.addEventListener('click', () =>{
  navMenu.classList.add('on')
  body.classList.add('menuOpen')
})

hamburguerClose.addEventListener('click', () =>{
  navMenu.classList.remove('on')
  body.classList.remove('menuOpen')
})