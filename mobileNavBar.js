const hamburguerOpen = document.querySelector('.hamburguerOpen')
const hamburguerClose = document.querySelector('.hamburguerClose')
const sectionNavMenu = document.querySelector('section')
const coffeOff = document.querySelector('.coffe')

hamburguerOpen.addEventListener('click', () =>{
  sectionNavMenu.classList.add('on')
  coffeOff.classList.add('Off')
})

hamburguerClose.addEventListener('click', () =>{
  sectionNavMenu.classList.remove('on')
  coffeOff.classList.remove('Off')
})