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
};

