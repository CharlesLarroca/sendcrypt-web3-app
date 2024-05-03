document.querySelector('.check-btn-bar').addEventListener('click', function(){
    document.querySelector('.navbar-links').style.left = 0
    document.querySelector('.check-btn-bar').style.display = 'none'
})

document.querySelector('.check-btn-close').addEventListener('click', function(){
  document.querySelector('.navbar-links').style.left = '-100%'
  document.querySelector('.check-btn-bar').style.display = 'block'
})