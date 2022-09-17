// const Shadow = () => {
//   if (document.querySelector('.dropdown').classList.contains('dropdown__list--visible')) {
//     return $('.dropdown').css({ 'filter': 'drop-shadow(30px 10px 4px #4444dd)' })
//   }
// }

// console.log(Shadow())

//let dropDown = document.getElementsByClassName('dropdown');


// document.contains('dropdown__list--visible')
// ?  $(document.getElementsByClassName('dropdown')).css({ 'filter': 'drop-shadow(30px 10px 4px #4444dd)'})
// : console.log(-1)

// let dropDown = document.getElementsByClassName('dropdown');
// for (let i = 0; i < dropDown.length; i++) {
//   dropDown[i].addEventListener('click', function (e) {
//     this.classList.add('shadowBg');

//   })
//   this.addEventListener('click', function (e) {
//     if (e.target !== dropDown) {
//       dropDown[i].classList.remove('shadowBg');
//     }
//   })
// };
let dropDown = document.getElementsByClassName('dropdown');
let dropdownLists = document.getElementsByName('dropdown__lists');
let dpordownItem = document.getElementsByName('dropdown__list-item');

for (let i = 0; i < dropDown.length; i++) {
  dropDown[i].addEventListener('click', function (e) {
    this.classList.toggle('shadowBg');
    if (e.target == dropdownLists) {
      dropDown[i].classList.togle('shadowBg');
    } else if (e.target == dropDown) {
      dropDown.classList.togle('shadowBg');
    }
    
  })
  // dropDown[i].classList.remove('shadowBg');
};

