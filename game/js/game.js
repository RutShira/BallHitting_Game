

const colors=["../imges/oreng.jpg","../imges/wellow.jpg","../imges/red.jpg","../imges/blou.jpg","../imges/b blou.jpg","../imges/pink.jpg","../imges/r pink.jpg"];
let seconds=0;
let minutes=0;
let randomArr;
let circleBoardIndex = 1;
let checkCircleIndex = 0;
let holeId = 1;
window.onload=start()
function start() {
    date();
    creatTimer();
    const bigDiv=document.createElement('div') ;
    bigDiv.id = 'bigDiv';
    document.body.appendChild(bigDiv);
    const board = document.createElement('div');
    board.id = 'board';
    bigDiv.appendChild(board);
    creatOptions();
    random();
    creatRandom();
    creatCircleBoard();
    newGame();
    exitGame();
    creatInstruction();
    chooseCirecle();
}


function random(){

   randomArr=[];
   for (let index = 0; index < 4; index++) {
    let iRand=Math.floor(Math.random()*6)+1;
     while (randomArr.find((element) => element === colors[iRand])) {
        iRand=Math.floor(Math.random()*6)+1;
     }
      randomArr[index] = colors[iRand];
   }
}
function creatRandom() {
    const randomDiv = document.createElement('div');
    randomDiv.id = 'randomDiv';
    board.appendChild(randomDiv);
    for (let i = 0; i < randomArr.length; i++) {
        const randomColor = document.createElement('img');
        randomColor.src = randomArr[i];
        randomColor.style.width="80px";
        randomColor.style.height="80px";
        randomColor.style.borderRadius="40px";
        randomColor.style.borderColor="black";
        randomColor.style.borderSize="4px";
        randomDiv.appendChild(randomColor);
    }
    const randomCover = document.createElement('div');
    randomCover.id = 'randomCover';
    randomDiv.appendChild(randomCover);
}

console.log(randomArr);
function creatTimer() {
    const minsDisplay = document.createElement('span');
    document.body.appendChild(minsDisplay);
    minsDisplay.id = 'minsDisplay';
    minsDisplay.innerHTML = '00';
    const secondsDisplay = document.createElement('span');
    document.body.appendChild(secondsDisplay);
    secondsDisplay.id = 'secondsDisplay';
    secondsDisplay.innerHTML = ': 00';
    timer();
}
 
function startTimer() {
    setTimeout(timer, 1000);
}
function timer() {
    seconds++;
    if (seconds > 59) {
        seconds = 0; minutes++;
        if (minutes < 10)
            minsDisplay.innerHTML = `0${minutes}`;
        else
            minsDisplay.innerHTML = `${minutes}`;
    }
    if (seconds < 10)
        secondsDisplay.innerHTML = `:0${seconds}`;
    else
        secondsDisplay.innerHTML = `:${seconds}`;
    startTimer();
}
 

function date(){
     const date=document.createElement('span') ;
    date.id="date";
    document.body.appendChild(date);
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    date.innerHTML = `${day}/${month}/${year}`;
}



 
setInterval(doSomethingEveryMinute, 60000);
 
function creatOptions() {
    const colorWrap = document.createElement('div');
    colorWrap.id = 'colorWrap';
    bigDiv.appendChild(colorWrap);
    for (let i = 0; i < colors.length; i++) {
        const color = document.createElement('img');
        color.style.width="80px";
        color.style.height="80px";
        color.style.borderRadius="40px";
        color.style.borderColor="black";
        color.style.borderSize="4px";
        color.src = colors[i];
        color.classList = 'color';
        colorWrap.appendChild(color);
    }
}

 
function creatCircleBoard() {
    for (let j = 0; j < 8; j++) {
        const divCircleBoard = document.createElement('div');
        divCircleBoard.classList = 'divCircleBoard';
        board.appendChild(divCircleBoard);
      
        for (let i = 0; i < 4; i++) {
            const circleBoard = document.createElement('img');
            circleBoard.style.width="80px";
            circleBoard.style.height="80px";
            circleBoard.style.borderRadius="40px";
            circleBoard.style.borderColor="black";
            circleBoard.style.borderSize="4px";
            circleBoard.id = `hole-ball ${holeId++}`;
            divCircleBoard.appendChild(circleBoard);
            circleBoard.classList = 'circleBoard';
             
        }
        
        for (let i = 0; i < 4; i++) {
            const checkCircle = document.createElement('img');
            checkCircle.style.width="20px";
            checkCircle.style.height="20px";
            checkCircle.style.borderRadius="10px";
            checkCircle.style.borderColor="black";
            checkCircle.style.borderSize="4px";
            checkCircle.classList = "checkCircle";
            divCircleBoard.appendChild(checkCircle);
        }
    }
}

function newGame() {
    const newGame = document.createElement('button');
    newGame.id='newGame';
    newGame.innerText = "new game";
    bigDiv.appendChild(newGame);
    newGame.onclick = () => {
        window.location.reload();
    }
}
 
function creatInstruction() {
    const instructionBtn = document.createElement('button');
    instructionBtn.id='instructionBtn';
    instructionBtn.innerText = "instruction";
    bigDiv.appendChild(instructionBtn);
    instructionBtn.addEventListener("click", instructions);
}
function instructions() {
    
   alert("The game is against the computer. "
        + "The computer creates a secret code using a combination of different colors or numbers."
        + "The code is 4 colors."
        + "The goal is to guess the secret code within 10 rounds,"
        + " by choosing a combination of colors or numbers. After each guess,"
        + " the computer provides feedback. The feedback consists of two elements:"
        + " the number of correct elements in the correct position (represented by red pegs) "
        + " and the number of correct elements in the wrong position (represented by white pegs)."
        + "  Victory is by a player who wins the code");
       
        
}
function exitGame() {
    const logOutBtn = document.createElement('button');
    logOutBtn.id = 'logOut';
    logOutBtn.innerText = "exit Game";
    bigDiv.appendChild(logOutBtn);
    logOutBtn.addEventListener('click', logOut)
}
// יציאה
function logOut() {
    localStorage.removeItem('timer');
    localStorage.setItem('current user',null);
    window.location = "../html/login.html";
    return;
}
// בלחיצה על הכפתור מכניס כדור
function chooseCirecle() {
    let count = 0;
    holeId = 0;
    const allcolors = document.getElementsByClassName('color');

    for (let k = 0; k < 7; k++) {
        allcolors[k].addEventListener('click', function () { 
            
            if (!(allcolors[k].disabled)) {
                allcolors[k].disabled = true;
                count++;
                switchImage(k);
                
                if (count === 4) {
                    count = 0;
                    for (let i = 0; i < 7; i++) {
                        allcolors[i].disabled = false;
                    }
                     
                   
                }
            }
        });
    }
}
function switchImage(k) {
    document.getElementById(`hole-ball ${++holeId}`).src = colors[k];
    if (holeId % 4 === 0) {
        check()
    }
}
 
function check() {

    let temp = false, pgia = 0, bool = 0;
    for (let i = 0; i < 4; i++) {
        if (document.getElementById(`hole-ball ${circleBoardIndex}`).getAttribute('src') === randomArr[i]) {
            ++bool;
            temp = true;
        }
         
        if (randomArr.find(element => element === document.getElementById(`hole-ball ${circleBoardIndex}`).getAttribute('src')) !== undefined && temp === false) {
            ++pgia;
        }
        circleBoardIndex++;
        temp = false;
    }

    
    const checkCircles = document.getElementsByClassName(`checkCircle`);
    let help = checkCircleIndex;
    for (let i = 0; i < bool; i++) {
        checkCircles[checkCircleIndex].src = '../imges/Inkedpgia.jpg';
        checkCircleIndex++;
    }
    for (let i = bool; i < (pgia + bool); i++) {
        checkCircles[checkCircleIndex].src = '../imges/Inkedpgia1.jpg';
        checkCircleIndex++;
    }
    while ((help + 4) !== checkCircleIndex) {
        checkCircleIndex++
    }
     
    if (bool === 4) {
        saveTimer();
        randomCover.style.display = "none"
        setTimeout(() => {
            window.location = "../html/winner.html";
        }, 3000)
        return;
    }
     
    if (holeId === 32) {
        randomCover.style.display = "none"
        setTimeout(() => {
            window.location = "../html/gameOver.html";
        }, 3000)
        return;
    }
}
 function saveTimer() {
    let users = JSON.parse(localStorage.getItem('gamers'));
    let currentUser = JSON.parse(localStorage.getItem('current user'));
   
    
    let timerObg = `${minutes}:${seconds}`
         
     
    localStorage.setItem('timer', JSON.stringify(timerObg));
    if(timerObg < currentUser.minTime){
        currentUser.minTime = timerObg;
        console.log(`זמן המשחק של ${currentUser.name} קוצר ל-${timer} שניות.`);
    }
     else {
    console.log(`זמן המשחק של ${currentUser.name} לא קוצר. הזמן הנוכחי: ${timer} שניות.`);
}

// שמור את המשתמשים ב-localStorage
localStorage.setItem('gamers', JSON.stringify(users));
 }   

 
 

 