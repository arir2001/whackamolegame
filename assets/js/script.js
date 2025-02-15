const squares = document.querySelectorAll('.square');

const farmerDiv = document.querySelector('#farmer');
const farmerGame = document.querySelector('#farmerGame');

const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');

const mound = document.querySelector('.mound');

const molehint = document.querySelector('.molehint');
const friendhint = document.querySelector('.friendhint');
const trickhint = document.querySelector('.trickhint');

const mole = document.querySelector('.mole');
const friend = document.querySelector('.friend');
const trick = document.querySelector('.trick');

const mybutton =  document.querySelector("#mybigbutton")
const mybutton2 =  document.querySelector("#mybigbutton2")

const level1Button =  document.querySelector("#level1")
const level2Button =  document.querySelector("#level2")
const level3Button =  document.querySelector("#level3")

const easyButton =  document.querySelector("#easy")
const harderButton =  document.querySelector("#harder")
const hardestButton =  document.querySelector("#hardest")


//variable 
let time = 60;

const endtime = 60;

// names for the elements selectors
let score = document.querySelector('#score');
let oopsiescore = document.querySelector('#oopsiescore');
let molescore = document.querySelector('#molescore');

//names for the actual score.
let result  = 0;
let oopsie  = 0;
let molestrick  = 0;
var x=1;

let hitPosition = 0;
let hitFriend = 0;
let hitTrick = 0;

easyButton.disabled = true;
harderButton.disabled = true;
hardestButton.disabled = true;

assigning = 0; //starting values
popping = 0; //pops up the 

function howtoplay(){
    alert('To play the game, press "Play Game". The grid will then fill with mole-holes, where different charactres will pop up. In level one, only moles will pop up. Four points will move you on to the next level! \n Every mole you click will add a point to "Your Score". In level two, your son lost his rabbit in your field. If you hit his rabbit accidentally four times, you lose and must restart the game. \n In the third level, the moles have stolen your husbands umberella. They use this to protect themselves from your hammer; if you hit this four times, your hammer will break and you will need to retsart the game. \n If you press "Stop Game", the game will restart when you press "Start Game" again.');

}

//score alerts
function scoreCounter(){
    if (score.textContent == 4){
        alert("you win! Press 'Play Game' to continue to the next level.");
        startstop(true);
        x= x+1;

        if (x==4){
            alert("Level completed!");
        }
        easiness(x);

    }
    if (oopsiescore.textContent == 4){
        alert("You have killed many rabbits. You lose!");
        startstop(true);
        x=1;
    }
    if (molescore.textContent == 4){
        alert("The moles just broke your hammer. You lose!");
        startstop(true);
        x=1;
    }
}

//alets to inform the player of each level's goal.
function level(x){
    if(x==1){
        alert('Level One: Easy');
        alert("Welcome to level one. You are a farmer whose farm is overrun with moles. Grab grab your hammer and go to whack them!");
    }

    if(x==2){
        alert('Level Two: Harder');
        alert("Welcome to level two. Your son lost his rabbit in the field. Be sure not to hit him with your hammer!");
    }

    if(x==3){
        alert('Level Three: Hardest');
        alert("Welcome to level three. The moles have stolen your husband's umberella. If your hammer hits the umberella too many times, your hammer will break. Be careful!");
    }
}

//function controlling the dificulty of the levels.
function easiness(x){
    if (x == 1){
        console.log('easy button pressed');
        easyButton.disabled = false;
        harderButton.disabled = true;
        hardestButton.disabled = true;
        

        return assigning = 1800 , popping = 1200;
    }

    if (x == 2){
        console.log('harder button pressed');
        easyButton.disabled = true;
        harderButton.disabled = false;
        hardestButton.disabled = true;
        

        return assigning = 1800 , popping = 1600;
    }

    if (x == 3){
        console.log('hardest button pressed');
        easyButton.disabled = true;
        harderButton.disabled = true;
        hardestButton.disabled = false;
        
 
        return assigning = 1300 , popping = 1100 ;
    }

    if (x == 4){
        console.log('Four ');
        let currentTime = 10;
        easyButton.disabled = true;
        harderButton.disabled = true;
        hardestButton.disabled = false;

        alert('BONUS LEVEL!');
 
        section2.classList.add('hidden');
        section3.classList.remove('hidden');
        bonuslevel();
    }
}

//level 1
function randomMole(){
    //to 3 choose random numbers
    var arr = [];

    //to 3 choose random numbers
    while(arr.length < 3){
        var r = Math.floor(Math.random() * 8) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    let a = arr[0];
    
    //this is the list of squares without mole, friend or trick. 

    //to clear the previous square classes
    squares.forEach(square => {
        square.classList.remove('mound');

        square.classList.remove('molehint');

        square.classList.remove('mole');

    } );

    //to make the behind look like mounds. 
    for(let i = 0; i < 9; i++) {
        if (squares[i] !== a) {
            squares[i].classList.add('mound');
        }
    }
    //to assign new hint squares
    let randomMole= squares[a];

    randomMole.classList.add('molehint');

    //assign the actual pop ups moles, rabbits, trick
    function PopUp(){
        randomMole.classList.add('mole');
    }

    timerPopUp = setTimeout(PopUp, popping);

    scoreCounter();

    // to know which id has been hit
    hitPosition = randomMole.id;
}

//assigning the classes to each square
function randomMole2(){
    //to 3 choose random numbers
    var arr = [];
    var lis = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var newlis = [];
    var newlis2 = [];

    //to 3 choose random numbers
    while(arr.length < 3){
        var r = Math.floor(Math.random() * 8) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    let a = arr[0];
    let b = arr[1];

    for (let i = 0; i < 9; i++) {
        if (lis[i] !== a) {
            newlis.push(lis[i]);
        }
    }
    for (let i = 0; i < 8; i++) {
        if (newlis[i] !== b) {
            newlis2.push(newlis[i]);
        }
    }//this is the list of squares without mole, friend or trick. 

    //to clear the previous square classes
    squares.forEach(square => {
        square.classList.remove('mound');

        square.classList.remove('molehint');
        square.classList.remove('friendhint');

        square.classList.remove('mole');
        square.classList.remove('friend');

    } );

    //to make the behind look like mounds. 
    for(let i = 0; i < 8; i++) {
        squares[newlis[i]].classList.add('mound');
    }
    //to assign new hint squares
    let randomMole= squares[a];
    let randomFriend= squares[b];

    randomMole.classList.add('molehint');
    randomFriend.classList.add('friendhint');

    //assign the actual pop ups moles, rabbits, trick
    function PopUp(){
        randomMole.classList.add('mole');
        randomFriend.classList.add('friend');
    }

    timerPopUp = setTimeout(PopUp, popping);

    scoreCounter();

    // to know which id has been hit
    hitPosition = randomMole.id;
    hitFriend = randomFriend.id;
}


//assigning the classes to each square

//assigning the classes to each square
function randomMole3(){
    //to 3 choose random numbers
    var arr = [];
    var lis = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var newlis = [];
    var newlis2 = [];
    var newlis3 = [];


    //to 3 choose random numbers
    while(arr.length < 3){
        var r = Math.floor(Math.random() * 8) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];

    for (let i = 0; i < 9; i++) {
        if (lis[i] !== a) {
            newlis.push(lis[i]);
        }
    }
    for (let i = 0; i < 8; i++) {
        if (newlis[i] !== b) {
            newlis2.push(newlis[i]);
        }
    }
    for (let i = 0; i < 7; i++) {
        if (newlis2[i] !== c) {
            newlis3.push(newlis2[i]);
        }
    }//this is the list of squares without mole, friend or trick. 

    //to clear the previous square classes
    squares.forEach(square => {
        square.classList.remove('mound');

        square.classList.remove('molehint');
        square.classList.remove('friendhint');
        square.classList.remove('trickhint');

        square.classList.remove('mole');
        square.classList.remove('friend');
        square.classList.remove('trick');

    } );

    //to make the behind look like mounds. 
    for(let i = 0; i < 7; i++) {
        squares[newlis2[i]].classList.add('mound');
        }
    //to assign new hint squares
    let randomMole= squares[a];
    let randomFriend= squares[b];
    let randomTrick= squares[c];

    randomMole.classList.add('molehint');
    randomFriend.classList.add('friendhint');
    randomTrick.classList.add('trickhint');

    //assign the actual pop ups moles, rabbits, trick
    function PopUp(){
        randomMole.classList.add('mole');
        randomFriend.classList.add('friend');
        randomTrick.classList.add('trick');
    }

    timerPopUp = setTimeout(PopUp, popping);

    scoreCounter();

    // to know which id has been hit
    hitPosition = randomMole.id;
    hitFriend = randomFriend.id;
    hitTrick = randomTrick.id;
}

//if a square with the id hit-x has been hit, the point is added to the appropriate score. 
squares.forEach(square => {
    square.addEventListener('mousedown' , () => {

        farmerDiv.classList.remove('farmer');
        farmerDiv.classList.add('farmerwhack');

        if (square.id == hitPosition){
            result ++ ;
            score.textContent = result;
            hitPosition = null;
        }

        if (square.id == hitFriend){
            oopsie ++ ;
            oopsiescore.textContent = oopsie;
            hitFriend = null;
        }

        if (square.id == hitTrick){
            molestrick ++ ;
            molescore.textContent = molestrick;
            hitTrick = null;
        }
    });
    square.addEventListener('mouseup' , () => {
        farmerDiv.classList.remove('farmerwhack');
        farmerDiv.classList.add('farmer');
    });
} );

//now start-stop function which allows the game to be started and restarted using buttons. 
//the var stop is set to null to begin with, false if start button pressed, true if stop button pressed.
//when start is pressed, the moveMole2 function starts, which moves the squares around the grid in a specified time frame.
// when stop is pressed, the timer is cleared, paused, and blue squares removed. 
let stop = null;

function startstop(stop){
    if (stop == false){
        easiness(x);
        level(x);

        moveMole();
        mybutton.disabled = true;
        mybutton2.disabled = false;
    
        
    
    }else if (stop == true){
        //clearing the game
        squares.forEach(square => {
            square.classList.remove('mound');

            square.classList.remove('molehint');
            square.classList.remove('friendhint');
            square.classList.remove('trickhint');

            square.classList.remove('mole');
            square.classList.remove('friend');
            square.classList.remove('trick');

        });

        clearInterval(timergame);
        clearTimeout(timerPopUp);
        clearInterval(countdownTimer);
        

        result  = 0;
        oopsie  = 0;
        molestrick  = 0;

        molescore.textContent = 0;
        score.textContent = 0;
        oopsiescore.textContent = 0;
        assigning = 0;
        popping = 0;

        mybutton.disabled = false; //disabling buttons once clicked
        mybutton2.disabled = true;

        easyButton.disabled = false;
        harderButton.disabled = false;
        hardestButton.disabled = false;
    }
}


//timer: 
let timeleft = document.querySelector('#time-left');
let currentTime = 60;


//starting the game!
function moveMole(){
    currentTime = 60;
    timeleft.textContent = currentTime;
    if (x==1){
        timergame = setInterval(randomMole, assigning);
    }
    if (x==2){
        timergame = setInterval(randomMole2, assigning);
    }
    if (x==3){
        timergame = setInterval(randomMole3, assigning);
    }
    

    //ending the game once the 60 secs are over
    function countDown(){
        currentTime-- ;
        timeleft.textContent = currentTime;
    
        if (currentTime ==0){
            alert("GAME OVER!");
            startstop(true);
        }
    }
    
    countdownTimer = setInterval(countDown, 1000);
}

//buttons to start and stop the game
mybutton.addEventListener('click' , startstop() );
mybutton2.addEventListener('click' , startstop() );



function bonuslevel(){
    alert('Welcome to the bonus level! Click the farmer as many times as you can to whack as many of those final moles. You have ten seconds!');
    
    section3.addEventListener('mousedown' , () => {

        farmerGame.classList.remove('farmer2');
        farmerGame.classList.add('farmerwhack2');

        result ++ ;
        score.textContent = result;

    });

    section3.addEventListener('mouseup' , () => {
        farmerGame.classList.remove('farmerwhack2');
        farmerGame.classList.add('farmer2');
    });

    currentTime=10 ;

    //ending the game once the 60 secs are over
    function countDown(){
        currentTime-- ;
        timeleft.textContent = currentTime;
    
        if (currentTime ==0){
            alert("Congrats, you whacked "+ result + " moles! Your farm is now free of those pesky pests.... for now....");
            startstop(true);
            x=1;

            console.log(x, );

            section2.classList.remove('hidden');
            section3.classList.add('hidden');

            return;
        }
    }
    
    countdownTimer = setInterval(countDown, 1000);
}



