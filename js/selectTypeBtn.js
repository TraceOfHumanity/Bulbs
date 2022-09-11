document.querySelectorAll('.type__btn').forEach(function (selectedBtn) {
  selectedBtn.addEventListener('click', function (e){
    selectedBtn.classList.toggle('selectedView')
  })
})