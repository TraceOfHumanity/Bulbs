let view = document.querySelector('.view').querySelectorAll('.side__link');
console.log(view)
view.forEach(element => {
  element.addEventListener('click', function(){
    view.forEach(nav=>nav.classList.remove('selectSide'))
    this.classList.add('selectSide')
  })
})