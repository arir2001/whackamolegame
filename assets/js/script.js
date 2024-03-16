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