var data_hora = document.getElementById("data-hora")
var corpo = document.getElementById("corpo")
var menuapp = document.getElementById("menuapp")

// Data e Hora
var now = new Date()

var dia = now.getDate()
var mes = now.getMonth()+1
var ano = now.getFullYear()

var hora = now.getHours()
var minuto = now.getMinutes()

setInterval(function(){
    now = new Date()

    dia = now.getDate()
    mes = now.getMonth()+1
    var ano = now.getFullYear()

    hora = now.getHours()
    if (hora <= 9){hora="0"+hora}
    minuto = now.getMinutes()
    if (minuto <= 9){minuto="0"+minuto}

    data_hora.innerHTML = `${hora}:${minuto} &#x2022 ${dia}/${mes}/${ano}`
}, 100)

// Backgrounds
var Background = Math.floor(Math.random() * 6 + 1)
console.log(Background)
corpo.style.backgroundImage = 'url(../Backgrounds/'+ Background +'.gif)'

// Animações
function buttonon(onbutton){
    document.getElementById(onbutton).style.backgroundColor="#6D6A75"
}
function buttonoff(offbutton){
    document.getElementById(offbutton).style.backgroundColor="#1E1E24"
}

function atividades(){
    menuapp.animate([
        {transform: 'translate(0)'},
        {transform: 'translate(150px, 200px)'}
    ], 500);
    animation.addEventListener('finish', function() {
        boxElement.style.transform = 'translate(150px, 200px)';
    });
}