// Variaveis de Captura 
    var data_hora = document.getElementById("data-hora")
    var corpo = document.getElementById("corpo")
    var menuapp = document.getElementById("menuapp")
    var sobre_janela = document.getElementById("sobre_janela")
    var sobre_janela_topbar = document.getElementById("sobre_janela_topbar")
    var close_button = document.getElementById("close_button")
    var screen = document.getElementById("screen")

// Variaveis de Contagem
    var zIndex = 10


// Data e Hora

    // Variaveis da Data e Hora
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


// Animações dos Botões
    function backbuttonon(p) {
        document.getElementById(p).style.backgroundColor="#6D6A75"
    }
    function backbuttonout(p) {
        document.getElementById(p).style.backgroundColor="#1E1E24"
    }
    function appanimationon(a){
        document.getElementById(a).style.width="250px"
    }
    function appanimationoff(a){
        document.getElementById(a).style.width="150px"
    }


// Backgrounds
    var Background = Math.floor(Math.random() * 6 + 1)
    corpo.style.backgroundImage = 'url(./Images/Backgrounds/'+ Background +'.gif)'


// Menu de Atividades
    function atividades(){
        if (menuapp.style.display == "block"){
            menuapp.style.display="none"
        }else {
            menuapp.style.display="block"
        }
    }


// Zindex
    addEventListener("mousedown", function(e){
        zIndex = zIndex+1
        if(e.path[0].id == "calculadora_janela_topbar"){
            document.getElementById("calculadora_janela").style.zIndex = zIndex
        }
        if(e.path[0].id == "calendario_janela_topbar"){
            document.getElementById("calendario_janela").style.zIndex = zIndex
        }
        if(e.path[0].id == "game_janela_topbar"){
            document.getElementById("game_janela").style.zIndex = zIndex
        }
        if(e.path[0].id == "sobre_janela_topbar"){
            document.getElementById("sobre_janela").style.zIndex = zIndex
        }
    })


// Abrir e Fechar Janelas
    function abrir_fechar_janela(a){
        menuapp.style.display="none"
        
        if (document.getElementById(a).style.display == "block"){
            document.getElementById(a).style.display="none"
        }else {
            document.getElementById(a).style.display="block"
            document.getElementById(a).style.zIndex = zIndex
        }
    }


// Calculadora
    function button_calc(a){
        if (a == "CE"){     // Limpa screen
            screen.value = ""
        } else if (a != "="){
            screen.value = screen.value + a
        }
        if (a == "=" && screen.value != ""){
            screen.value = eval(screen.value)
        }
    }
    document.addEventListener("keydown", function(event) {
        if(event.code == "NumpadEnter"){
            screen.value = eval(screen.value)
        }
        if(event.code == "Escape"){
            screen.value = ""
        }
    })


// Calendario


// Janelas arrastaveis
    window.onload = function () {
        Dragable(sobre_janela_topbar);
        Dragable(calculadora_janela_topbar);
        Dragable(game_janela_topbar);
        Dragable(calendario_janela_topbar);
    };

    //Adiciona eventos pra navegadores modernos e antigos
        function addEvent(el, type, callback)
        {
            if (el.addEventListener) {
            el.addEventListener(type, callback);
            } else if (el.attachEvent) {
            el.attachEvent("on" + type, callback);
            }
        }

    function Dragable(el)
    {
        var isMove = false, //Verifica se esta se movendo
            x = 0, y = 0, //Pega as coordenadas do mouse
            xel = 0, yel = 0; // ultima posição do elemento

        addEvent(el, "mousedown", function (e) {
            isMove = true;

            el.className += " isMoving";

            x = window.event ? window.event.clientX : e.pageX;
            y = window.event ? window.event.clientY : e.pageY;

            xel = x - el.offsetLeft;
            yel = y - el.offsetTop;
        });

        addEvent(document, "mousemove", function (e) {
            if (isMove) {
                e.preventDefault();

                x = window.event ? window.event.clientX : e.pageX;
                y = window.event ? window.event.clientY : e.pageY;

                el.style.left = (x - xel) + 'px';
                el.style.top  = (y - yel) + 'px';

                // janela imita a top_bar
                if (el.id == "sobre_janela_topbar"){
                    sobre_janela.style.left = (x - xel) + 'px';
                    sobre_janela.style.top  = (y - yel) + 'px';
                    sobre_janela.style.marginLeft = "0";
                }
                if (el.id == "calculadora_janela_topbar"){
                    document.getElementById("calculadora_janela").style.left = (x - xel) + 'px';
                    document.getElementById("calculadora_janela").style.top  = (y - yel) + 'px';
                    document.getElementById("calculadora_janela").style.marginLeft = "0";
                }
                if (el.id == "game_janela_topbar"){
                    document.getElementById("game_janela").style.left = (x - xel) + 'px';
                    document.getElementById("game_janela").style.top  = (y - yel) + 'px';
                    document.getElementById("game_janela").style.marginLeft = "0";
                }
                if (el.id == "calendario_janela_topbar"){
                    document.getElementById("calendario_janela").style.left = (x - xel) + 'px';
                    document.getElementById("calendario_janela").style.top  = (y - yel) + 'px';
                    document.getElementById("calendario_janela").style.marginLeft = "0";
                }
            }
        });

        addEvent(document, "mouseup", function () {
            el.className = String(el.className).replace(/(^|\s)isMoving(\s|$)/g, " ");
            isMove = false;
        });
    };
