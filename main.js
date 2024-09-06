var turn = 1
var round = 1
var Xpoint = 0
var Opoint = 0

const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const btn6 = document.querySelector('.btn6')
const btn7 = document.querySelector('.btn7')
const btn8 = document.querySelector('.btn8')
const btn9 = document.querySelector('.btn9')
const text = document.getElementById('text')

var clicked1 = false
var clicked2 = false
var clicked3 = false
var clicked4 = false
var clicked5 = false
var clicked6 = false
var clicked7 = false
var clicked8 = false
var clicked9 = false

var btnvalue1 = 0
var btnvalue2 = 0
var btnvalue3 = 0
var btnvalue4 = 0
var btnvalue5 = 0
var btnvalue6 = 0
var btnvalue7 = 0
var btnvalue8 = 0
var btnvalue9 = 0

var btnclicked = 0

var victory = false

function gamelock(){
    clicked1 = true
    clicked2 = true
    clicked3 = true
    clicked4 = true
    clicked5 = true
    clicked6 = true
    clicked7 = true
    clicked8 = true
    clicked9 = true
}

const point1 = document.querySelector('.point1')
const point2 = document.querySelector('.point2')
const restartbar = document.querySelector('.restartbar')

point1.innerHTML = '= ' + Xpoint  
point2.innerHTML = '= ' + Opoint

function Xvictory(){
    Xpoint ++
    point1.innerHTML = '= ' + Xpoint 
    console.log("x ganho")
    text.innerHTML = "X ganhou"
    gamelock()
    restartbar.style.width = '0px'
    setTimeout(function() {
        if (reseted == true) {
            reseted = false
        } else {
            restartfunc();
        }
    }, 5000);
} 

function Ovictory(){
    Opoint ++
    point2.innerHTML = '= ' + Opoint
    console.log("O ganho")
    text.innerHTML = "O ganhou"
    gamelock()
    restartbar.style.width = '0px'
    setTimeout(function() {
        if (reseted == true) {
            reseted = false
        } else {
            restartfunc();
        }
    }, 5000);
}

function draw(){
    console.log("Empate")
    text.innerHTML = "Empate"
    restartbar.style.width = '0px'
    setTimeout(function() {
        if (reseted == true) {
            reseted = false
        } else {
            restartfunc();
        }
    }, 5000);
}

function viccheck(){
    if (round == 9) {
        if (btnvalue1 + btnvalue2 + btnvalue3 == 6) {
            Xvictory()
        } else if (btnvalue4 + btnvalue5 + btnvalue6 == 6) {
            Xvictory()
        } else if (btnvalue7 + btnvalue8 + btnvalue9 == 6) {
            Xvictory()
        } else if (btnvalue1 + btnvalue4 + btnvalue7 == 6) {
            Xvictory()
        } else if (btnvalue2 + btnvalue5 + btnvalue8 == 6) {
            Xvictory()
        } else if (btnvalue3 + btnvalue6 + btnvalue9 == 6) {
            Xvictory()
        } else if (btnvalue1 + btnvalue5 + btnvalue9 == 6) {
            Xvictory()
        } else if (btnvalue3 + btnvalue5 + btnvalue7 == 6) {
            Xvictory()
        } else if (btnvalue1 + btnvalue2 + btnvalue3 == 30) {
            Ovictory()
        } else if (btnvalue4 + btnvalue5 + btnvalue6 == 30) {
            Ovictory()
        } else if (btnvalue7 + btnvalue8 + btnvalue9 == 30) {
            Ovictory()
        } else if (btnvalue1 + btnvalue4 + btnvalue7 == 30) {
            Ovictory()
        } else if (btnvalue2 + btnvalue5 + btnvalue8 == 30) {
            Ovictory()
        } else if (btnvalue3 + btnvalue6 + btnvalue9 == 30) {
            Ovictory()
        } else if (btnvalue1 + btnvalue5 + btnvalue9 == 30) {
            Ovictory()
        } else if (btnvalue3 + btnvalue5 + btnvalue7 == 30) {
            Ovictory()
        } else {
            draw()
        }
    } else {
        if (btnvalue1 + btnvalue2 + btnvalue3 == 6) {
            Xvictory()
        } if (btnvalue4 + btnvalue5 + btnvalue6 == 6) {
            Xvictory()
        } if (btnvalue7 + btnvalue8 + btnvalue9 == 6) {
            Xvictory()
        } if (btnvalue1 + btnvalue4 + btnvalue7 == 6) {
            Xvictory()
        } if (btnvalue2 + btnvalue5 + btnvalue8 == 6) {
            Xvictory()
        } if (btnvalue3 + btnvalue6 + btnvalue9 == 6) {
            Xvictory()
        } if (btnvalue1 + btnvalue5 + btnvalue9 == 6) {
            Xvictory()
        } if (btnvalue3 + btnvalue5 + btnvalue7 == 6) {
            Xvictory()
        } if (btnvalue1 + btnvalue2 + btnvalue3 == 30) {
            Ovictory()
        } if (btnvalue4 + btnvalue5 + btnvalue6 == 30) {
            Ovictory()
        } if (btnvalue7 + btnvalue8 + btnvalue9 == 30) {
            Ovictory()
        } if (btnvalue1 + btnvalue4 + btnvalue7 == 30) {
            Ovictory()
        } if (btnvalue2 + btnvalue5 + btnvalue8 == 30) {
            Ovictory()
        } if (btnvalue3 + btnvalue6 + btnvalue9 == 30) {
            Ovictory()
        } if (btnvalue1 + btnvalue5 + btnvalue9 == 30) {
            Ovictory()
        } if (btnvalue3 + btnvalue5 + btnvalue7 == 30) {
            Ovictory()
        } else {
            console.log("nada")
            console.log("Estamos no round " + round)
        }
    }
}

const container = document.querySelector('.container')
container.classList.add('blue')

function symbol(){
    if(turn == 1){
        container.classList.remove('blue')
        container.classList.add('red')
        document.getElementById('symbol' + btnclicked).textContent = "close"
        turn = 2
    } else {
        container.classList.remove('red')
        container.classList.add('blue')
        document.getElementById('symbol' + btnclicked).textContent = "circle"
        turn = 1
    } 
}

btn1.addEventListener('click', ()=> {
    btnclicked = 1
    if (clicked1 == false) {
        if (turn == 1) {
            btn1.classList.add('blue')
            btnvalue1 = 2
        } else {
            btn1.classList.add('red')
            btnvalue1 = 10
        }
        btn1.style.cursor = 'not-allowed'
        symbol()
        viccheck()
        round ++
    } else {
        console.log("nao")
    }
    clicked1 = true
});

btn2.addEventListener('click', ()=> {
    btnclicked = 2
    if (clicked2 == false) {
        if (turn == 1) {
            btn2.classList.add('blue')
            btnvalue2 = 2
        } else {
            btn2.classList.add('red')
            btnvalue2 = 10
        }
        btn2.style.cursor = 'not-allowed'
        symbol()
        viccheck()
        round ++
    } else {
        console.log("nao")
    }
    clicked2 = true
});

btn3.addEventListener('click', ()=> {
    btnclicked = 3
    if (clicked3 == false) {
        if (turn == 1) {
            btn3.classList.add('blue')
            btnvalue3 = 2
        } else {
            btn3.classList.add('red')
            btnvalue3 = 10
        }
        btn3.style.cursor = 'not-allowed'
        symbol()
        viccheck()        
        round ++
    } else {
        console.log("nao")
    }
    clicked3 = true
});

btn4.addEventListener('click', ()=> {
    btnclicked = 4
    if (clicked4 == false) {
        if (turn == 1) {
            btn4.classList.add('blue')
            btnvalue4 = 2
        } else {
            btn4.classList.add('red')
            btnvalue4 = 10
        }
        btn4.style.cursor = 'not-allowed'
        symbol()
        viccheck()
        round ++
    } else {
        console.log("nao")
    }
    clicked4 = true
});

btn5.addEventListener('click', ()=> {
    btnclicked = 5
    if (clicked5 == false) {
        if (turn == 1) {
            btn5.classList.add('blue')
            btnvalue5 = 2
        } else {
            btn5.classList.add('red')
            btnvalue5 = 10
        }
        btn5.style.cursor = 'not-allowed'
        symbol()
        viccheck()
        round ++
    } else {
        console.log("nao")
    }
    clicked5 = true
});

btn6.addEventListener('click', ()=> {
    btnclicked = 6
    if (clicked6 == false) {
        if (turn == 1) {
            btn6.classList.add('blue')
            btnvalue6 = 2
        } else {
            btn6.classList.add('red')
            btnvalue6 = 10
        }
        btn6.style.cursor = 'not-allowed'
        symbol()
        viccheck()
        round ++
    } else {
        console.log("nao")
    }
    clicked6 = true
});

btn7.addEventListener('click', ()=> {
    btnclicked = 7
    if (clicked7 == false) {
        if (turn == 1) {
            btn7.classList.add('blue')
            btnvalue7 = 2
        } else {
            btn7.classList.add('red')
            btnvalue7 = 10
        }
        btn7.style.cursor = 'not-allowed'
        symbol()
        viccheck()
        round ++
    } else {
        console.log("nao")
    }
    clicked7 = true
});

btn8.addEventListener('click', ()=> {
    btnclicked = 8
    if (clicked8 == false) {
        if (turn == 1) {
            btn8.classList.add('blue')
            btnvalue8 = 2
        } else {
            btn8.classList.add('red')
            btnvalue8 = 10
        }
        btn8.style.cursor = 'not-allowed'
        symbol()
        viccheck()
        round ++
    } else {
        console.log("nao")
    }
    clicked8 = true
});

btn9.addEventListener('click', ()=> {
    btnclicked = 9
    if (clicked9 == false) {
        if (turn == 1) {
            btn9.classList.add('blue')
            btnvalue9 = 2
        } else {
            btn9.classList.add('red')
            btnvalue9 = 10
        }
        btn9.style.cursor = 'not-allowed'
        symbol()
        viccheck()
        round ++
    } else {.
        console.log("nao")
    }
    clicked9 = true
});

const restart = document.getElementById("restart")
var giro = 0

function rotate(){
    giro ++
    restart.style.rotate = '' + -360 * giro + 'deg'
}

var reseted = false

function restartfunc() {
reseted = true

rotate()
container.classList.remove('red')
container.classList.add('blue')

setTimeout(function() {
    restartbar.style.width = '300px'
}, 250);


turn = 1
round = 1

clicked1 = false
clicked2 = false
clicked3 = false
clicked4 = false
clicked5 = false
clicked6 = false
clicked7 = false
clicked8 = false
clicked9 = false

btn1.style.cursor = 'pointer'
btn2.style.cursor = 'pointer'
btn3.style.cursor = 'pointer'
btn4.style.cursor = 'pointer'
btn5.style.cursor = 'pointer'
btn6.style.cursor = 'pointer'
btn7.style.cursor = 'pointer'
btn8.style.cursor = 'pointer'
btn9.style.cursor = 'pointer'

btnvalue1 = 0
btnvalue2 = 0
btnvalue3 = 0
btnvalue4 = 0
btnvalue5 = 0
btnvalue6 = 0
btnvalue7 = 0
btnvalue8 = 0
btnvalue9 = 0

btnclicked = 0

victory = false

btn1.classList.remove('red');
btn2.classList.remove('red');
btn3.classList.remove('red');
btn4.classList.remove('red');
btn5.classList.remove('red');
btn6.classList.remove('red');
btn7.classList.remove('red');
btn8.classList.remove('red');
btn9.classList.remove('red');

btn1.classList.remove('blue');
btn2.classList.remove('blue');
btn3.classList.remove('blue');
btn4.classList.remove('blue');
btn5.classList.remove('blue');
btn6.classList.remove('blue');
btn7.classList.remove('blue');
btn8.classList.remove('blue');
btn9.classList.remove('blue');

document.getElementById('symbol1').textContent = ""
document.getElementById('symbol2').textContent = ""
document.getElementById('symbol3').textContent = ""
document.getElementById('symbol4').textContent = ""
document.getElementById('symbol5').textContent = ""
document.getElementById('symbol6').textContent = ""
document.getElementById('symbol7').textContent = ""
document.getElementById('symbol8').textContent = ""
document.getElementById('symbol9').textContent = ""

text.innerHTML = ""

setTimeout(function() {
    reseted = false
}, 4999);
};

restart.addEventListener('click', ()=> {
    restartfunc()
});