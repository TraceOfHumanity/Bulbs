// const type = document.querySelectorAll('.type').forEach(function (selectedBtn){
//   console.log(type);
//   selectedBtn.querySelectorAll('.type__btn').forEach(element => {
//   element.addEventListener('click', function(e){
//     selectedBtn.forEach(nav=>nav.classList.remove('selectedView'))
//     this.classList.add('selectedView');
//   })
// })
// })

const type = document.getElementById('type').querySelectorAll('.type__btn');
console.log(type);
type.forEach(element => {
  element.addEventListener('click', function(){
    type.forEach(nav=>nav.classList.remove('selectedView'))
    this.classList.add('selectedView');
  })
})
// document.querySelectorAll('.type__btn').forEach(function (selectedBtn) {
//   selectedBtn.addEventListener('click', function (e){
//     selectedBtn.classList.toggle('selectedView')
//   })
// })