console.log("Welcome to Tic Tac toe")
let ting = new Audio("ting.mp3")
let gameover = new Audio("gameover.wav")
let turn = "X"
let isGameOver = false

const changeTurn = ()=>{
    return turn === "X"? "0": "X" 
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 7, 6.5, 0, 11, 10.5],
        [3, 4, 5, 7, 20.5, 0, 11, 32.75],
        [6, 7, 8, 7, 34.5, 0, 11, 55],
        [0, 3, 6, -7, 20.5, 90, -11, 32.75],
        [1, 4, 7, 7, 20.5, 90, 11, 32.75],
        [2, 5, 8, 21, 20.5, 90, 33.25, 32.75],
        [0, 4, 8, 7, 20.5, 45, 11, 32.75],
        [2, 4, 6, 7, 20.5, 135, 11, 32.75],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[2]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[2]].innerText + " wins"
            gameover.play();
            isGameOver = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            if (window.matchMedia("(max-width: 950px)").matches) {
                document.querySelector(".line").style.width = "45vw";
                document.querySelector(".line").style.transform=`translate(${e[6]}vw, ${e[7]}vw) rotate(${e[5]}deg)`
            }
            else{
                document.querySelector(".line").style.width="28vw"
                document.querySelector(".line").style.transform=`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            }
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText=""
    });
    turn = "X";
    isGameOver = false;
    document.querySelector(".line").style.width="0vw"
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})