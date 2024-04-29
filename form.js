const form = document.getElementById('form')
const buttonShow = document.getElementById('buttonShow')
const buttonClose = document.getElementById('buttonClose')

buttonShow.addEventListener('click', function(){
    form.classList.add('show')
    console.log("ai")
})

buttonClose.addEventListener('click', function(){
    form.classList.remove('show')
})