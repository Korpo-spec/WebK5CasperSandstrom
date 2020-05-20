const menuButton = document.querySelector("#dropDown");
menuButton.addEventListener("click", MenubuttonClicked);

let animationDirection = ["normal", "reverse"];
let animationIndex = false;



const elem = document.querySelector(".dropDownMenu");

const gridElems = document.querySelectorAll(".gridItem");
const elem2 = gridElems[1];
const buttons = document.querySelectorAll(".buttonClass");


for (let index = 1; index < gridElems.length; index++) {
    
    gridElems[index].style.display = "none";
    
}


console.log(buttons.length)
for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    buttons[index].addEventListener("click", buttonClicked);
    
}

let firstDone = true;
let currentPage = elem;
document.querySelector(".buttonClass").addEventListener("click", buttonClicked);
function buttonClicked() {
    let number = parseInt(this.value, 10)  + 1;
    gridElems[number].style.display = "block";
    animateObjectHorizontally(gridElems[1], 0, window.innerWidth, 1000);
    animateObjectHorizontally(gridElems[number], -window.innerWidth, 0, 1000);
    animationIndex = !animationIndex;
    currentPage = gridElems[number];
}

let timesClicked = 0;

function MenubuttonClicked() {
    animationIndex = !animationIndex;

    if (animationIndex) {
        currentPage.style.display = "block";

        elem2.style.transform = 'translateY('+-window.innerHeight+'px)';
        elem2.style.display = "block";

        animateObjectVertically(currentPage, 0, window.innerHeight, 800);
        animateObjectVertically(elem2, -window.innerHeight, 0, 800);

        timesClicked++;

    }
    else{
        currentPage.style.display = "block";
        elem2.style.display = "block";
        animateObjectVertically(currentPage, window.innerHeight, 0, 800);
        animateObjectVertically(elem2, 0, -window.innerHeight, 800);
        timesClicked++;
    }
   
}
function animateObjectVertically(element, start, stop, time) {
    
    start = parseFloat(getComputedStyle(element).transform.split(',')[5]) || 0;

    element.animate([
    {transform: 'translateY('+start+'px)'},
    {transform: 'translateY('+stop+'px)'}
    ],
    {
        duration: time,
        easing: "cubic-bezier(0.42, 0, 0.58, 1)"
    }).onfinish = function(){
        // block the element transition to the '_stop' position
        element.style.transform = 'translateY('+stop+'px)';
        timesClicked--;
        if (timesClicked == 0 && animationIndex) {
            element.style.display = "none";
        }
        else if(timesClicked < 0){
            timesClicked = 0;
        }
    }

}
function animateObjectHorizontally(element, start, stop, time) {
    

    element.animate([
        {transform: 'translateX('+start+'px)'},
        {transform: 'translateX('+stop+'px)'}
        ],
        {
            duration: time,
            easing: "cubic-bezier(0.42, 0, 0.58, 1)"
        }).onfinish = function(){
            if (firstDone) {
                
                element.style.display = "none"
            }
            firstDone = !firstDone;
            
        }
}

