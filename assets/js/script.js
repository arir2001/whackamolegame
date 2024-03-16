const squares = document.querySelectorAll('.square');

const farmerDiv = document.querySelector('#farmer');

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


//score alerts
function scoreCounter(){
    if (score.textContent == 4){
        alert("you win!");
        startstop(true);
    }
    if (oopsiescore.textContent == 4){
        alert("you have killed many rabbits. You lose!");
        startstop(true);
    }
    if (molescore.textContent == 4){
        alert("The moles just stole your hammer. You lose!");
        startstop(true);
    }
}

assigning = 0 //starting values
popping = 0 //pops up the 

x = 0
function easiness(x){
    if (x == 0){
        alert('choose a difficulty level before you begin!')
        return x=0
    }

    if (x == 1){
        console.log('easy button pressed');
        easyButton.disabled = false;
        harderButton.disabled = true;
        hardestButton.disabled = true;

        return assigning = 1800 , popping = 1200
    }

    if (x == 2){
        console.log('harder button pressed');
        easyButton.disabled = true;
        harderButton.disabled = false;
        hardestButton.disabled = true;

        return assigning = 1800 , popping = 1600
    }

    if (x == 3){
        console.log('hardest button pressed');
        easyButton.disabled = true;
        harderButton.disabled = true;
        hardestButton.disabled = false;
 
        return assigning = 1300 , popping = 1100 
    }
}



//assigning the classes to each square
function randomMole(){
    //to 3 choose random numbers
    var arr = [];
    var lis = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var newlis = []
    var newlis2 = []
    var newlis3 = []


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

    } )

    //to make the behind look like mounds. 
    for(let i = 0; i < 7; i++) {
        squares[newlis2[i]].classList.add('mound')
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

    timerPopUp = setTimeout(PopUp, popping)

    scoreCounter()

    // to know which id has been hit
    hitPosition = randomMole.id;
    hitFriend = randomFriend.id;
    hitTrick = randomTrick.id;
}