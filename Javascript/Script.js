const menuButton = document.querySelector("#dropDown");
menuButton.addEventListener("click", MenubuttonClicked);

let animationDirection = ["normal", "reverse"];
let animationIndex = false;

const elem = document.querySelector(".dropDownMenu");
const elem2 = document.getElementById("dropDownMenu2")

let timesClicked = 0;
/*
elem.animate([
    {
        clipPath: "circle(100%)",
    },
    {
        clipPath: "circle(0%)",
    }
], 1000).onfinish = function(){

    elem.style.display = "none";
    elem2.style.display= "block";
    elem2.animate([
    {
        clipPath: "circle(0%)",
    },
    {
        clipPath: "circle(100%)",
    }
], 1000)
}
*/
function MenubuttonClicked() {
    /*
    document.querySelector(".dropDownMenu").style.animationPlayState = "paused";
    document.querySelector(".dropDownMenu").style.animationDirection = animationDirection[animationIndex];
    document.querySelector(".dropDownMenu").style.animationPlayState = "running";
    
    if (animationIndex == 0) {
        animationIndex = 1
    }
    else{
        animationIndex = 0
    }
    

   document.querySelector(".dropDownMenu").animate([
    {transform: 'translateX(0%)'},
    {transform: 'translateX(100%)'}
    ],{
        duration:1000,
        iterations: 1,
        fill: "forwards"
    })

    */

    animationIndex = !animationIndex;

    if (animationIndex) {
        elem.style.display = "block";
        elem2.style.display = "block";
        animateObject(elem, 0, window.innerHeight, 1000);
        animateObject(elem2, -window.innerHeight, 0, 1000);

        timesClicked++;

    }
    else{
        elem.style.display = "block";
        elem2.style.display = "block";
        animateObject(elem, window.innerHeight, 0, 1000);
        animateObject(elem2, 0,   -window.innerHeight, 1000);
        timesClicked++;
    }
   
}
function animateObject(element, start, stop, time) {
    
    start = parseFloat(getComputedStyle(element).transform.split(',')[5]) || 0;

    element.animate([
    {transform: 'translateY('+start+'px)'},
    {transform: 'translateY('+stop+'px)'}
    ],time).onfinish = function(){
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