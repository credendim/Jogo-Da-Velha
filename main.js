var turn = 1
var round = 1

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

function Xvictory(){
    console.log("x ganho")
    text.innerHTML = "X ganhou"
    gamelock()
}

function Ovictory(){
    console.log("O ganho")
    text.innerHTML = "O ganhou"
    gamelock()
}

function draw(){
    console.log("Empate")
    text.innerHTML = "Empate"
}

function viccheck(){
    if (round == 9) {
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

function symbol(){
    if(turn == 1){
        document.getElementById('symbol' + btnclicked).textContent = "close"
        turn = 2
    } else {
        document.getElementById('symbol' + btnclicked).textContent = "circle"
        turn = 1
    } 
}

btn1.addEventListener('click', ()=> {
    btnclicked = 1
    if (clicked1 == false) {
        btn1.classList.add('active')
        if (turn == 1) {
            btnvalue1 = 2
        } else {
            btnvalue1 = 10
        }
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
        btn2.classList.add('active')
        if (turn == 1) {
            btnvalue2 = 2
        } else {
            btnvalue2 = 10
        }
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
        btn3.classList.add('active')
        if (turn == 1) {
            btnvalue3 = 2
        } else {
            btnvalue3 = 10
        }
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
        btn4.classList.add('active')
        if (turn == 1) {
            btnvalue4 = 2
        } else {
            btnvalue4 = 10
        }
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
        btn5.classList.add('active')
        if (turn == 1) {
            btnvalue5 = 2
        } else {
            btnvalue5 = 10
        }
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
        btn6.classList.add('active')
        if (turn == 1) {
            btnvalue6 = 2
        } else {
            btnvalue6 = 10
        }
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
        btn7.classList.add('active')
        if (turn == 1) {
            btnvalue7 = 2
        } else {
            btnvalue7 = 10
        }
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
        btn8.classList.add('active')
        if (turn == 1) {
            btnvalue8 = 2
        } else {
            btnvalue8 = 10
        }
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
        btn9.classList.add('active');
        if (turn == 1) {
            btnvalue9 = 2
        } else {
            btnvalue9 = 10
        }
        symbol()
        viccheck()
        round ++
    } else {
        console.log("nao")
    }
    clicked9 = true
});

const restart = document.querySelector(".restart")

restart.addEventListener('click', ()=> {
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

btn1.classList.remove('active');
btn2.classList.remove('active');
btn3.classList.remove('active');
btn4.classList.remove('active');
btn5.classList.remove('active');
btn6.classList.remove('active');
btn7.classList.remove('active');
btn8.classList.remove('active');
btn9.classList.remove('active');

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
});