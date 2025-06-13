// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "purple","green"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function () {
//     if (started == false) {
//         console.log("game is started");
//         started = true;

//         levelup();
//     }
// });

// //keypress game start > btn flash level > btn press check user and game sequence

// function gameflash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 500);           //after 1 sec

// }

// function userflash(btn) {
//     btn.classList.add("userflash");
//     setTimeout(function () {
//         btn.classList.remove("userflash");
//     }, 500);           //after 1 sec

// }


// function levelup() {
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;

//     //random btn choose
//     let randIdx = Math.floor(Math.random()*3);
//     let randcolor = btns[randIdx];
//     let randbtn = document.querySelector(`.${randcolor}`);

//     console.log(randIdx);
//     console.log(randcolor);
//     console.log(randbtn);

//     gameSeq.push(randcolor);
//     console.log(gameSeq);

//     gameflash(randbtn);
// }
// function checkans(idx) {
//     console.log("curr level:", level);
//     // let idx = level-1;    //current level is equal to gameseq and userseq

//     if (userSeq[idx] === gameSeq[idx]) {
//         // console.log("same value");
//         if (userSeq.length == gameSeq.length) {
//             setTimeout(levelup,1000);   
//         }
//     }
//     else {
//         h2.innerHTML = `Game Over! Your score was <b>${level} </b>
//         Press any key to start.`;
//         reset();
//     }
// }

// function btnpress() {
//     console.log(this);
//     userflash(btn);

//     usercolor = btn.getAttribute("id");
//     console.log(usercolor);
//     userSeq.push(usercolor);
    
//     checkans(userSeq.length-1);
// }

// let allbtns = document.querySelectorAll(".btn");
// for (btn of allbtns) {
//     btn.addEventListener("click", gameflash);
// }

// function reset() {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }

let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game started");
        started = true;
        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 300);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4); // 🔁 fixed: should be 4 not 3
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    gameflash(randBtn);
    console.log("Game sequence:", gameSeq);
}

function checkans(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to start again.`;
        reset();
    }
}

function btnpress() {
    let userColor = this.getAttribute("id");
    userSeq.push(userColor);
    userflash(this);
    checkans(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnpress); // 🔁 was incorrectly using gameflash here
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
