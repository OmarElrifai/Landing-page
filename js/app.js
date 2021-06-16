/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let toggle=1;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//the sectioninteract function aims to make section responsive with scrolling the on the document

function sectioninteract(currentscroll,section1position,section2position,section3position){
    if(currentscroll > (section1position-200)&&currentscroll <(section2position-200)){
        document.querySelectorAll(".landing__container")[0].classList.add("active-section");
        document.querySelectorAll(".landing__container")[1].classList.remove("active-section");
        document.querySelectorAll(".landing__container")[2].classList.remove("active-section");
        
        }else if(currentscroll > (section2position-200)&&currentscroll <(section3position-200)){
            document.querySelectorAll(".landing__container")[1].classList.add("active-section");
        document.querySelectorAll(".landing__container")[0].classList.remove("active-section");
        document.querySelectorAll(".landing__container")[2].classList.remove("active-section");
            
        } else if(currentscroll > (section3position-200)){
            
            document.querySelectorAll(".landing__container")[2].classList.add("active-section");
        document.querySelectorAll(".landing__container")[0].classList.remove("active-section");
        document.querySelectorAll(".landing__container")[1].classList.remove("active-section");
            
        } else{
            
            document.querySelectorAll(".landing__container")[2].classList.remove("active-section");
        document.querySelectorAll(".landing__container")[0].classList.remove("active-section");
        document.querySelectorAll(".landing__container")[1].classList.remove("active-section");
            
        }
    
}

// the anchorinteract function aims to make the anchor links responsive with the scrolling on the document 

function anchorinteract(currentscroll,section1position,section2position,section3position){
     if(currentscroll < (section2position-200)){
        document.getElementById("item1").classList.add("active");
        document.getElementById("item2").classList.remove("active");
        document.getElementById("item3").classList.remove("active");
        
    
    }else if(currentscroll > (section2position-200) && currentscroll < (section3position-200)){
         document.getElementById("item2").classList.add("active");
        document.getElementById("item1").classList.remove("active");
        document.getElementById("item3").classList.remove("active");
    }else if(currentscroll > (section3position-200)){
        document.getElementById("item3").classList.add("active");
        document.getElementById("item2").classList.remove("active");
        document.getElementById("item1").classList.remove("active");
    }else{
           document.getElementById("item3").classList.remove("active");
        document.getElementById("item2").classList.remove("active");
        document.getElementById("item1").classList.remove("active");
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


//the main function that starts the navigation functionality.It contains the sectioninteract function and the anchorinteract  

window.onscroll=function(){navfunction()}
function navfunction(){
    let currentscroll=document.documentElement.scrollTop;
let section1position=document.getElementById("section1").offsetTop;
let section2position=document.getElementById("section2").offsetTop;
let section3position=document.getElementById("section3").offsetTop;
    
    anchorinteract(currentscroll,section1position,section2position,section3position)
    sectioninteract(currentscroll,section1position,section2position,section3position);
}



/**
 * End Main Functions
 * Begin Events
 * 
*/

//the eventlistener that gives the functionality of the hamburger button in navigation menu
document.getElementById("btn").addEventListener("click",function(){
     toggle++
    for(let i=0;i<3;i++){
        if((toggle%2)==0 && window.innerWidth<600){
    document.querySelectorAll(".navbar__menu li")[i].style.display="block";
    document.querySelector(".container-fluid").style.marginTop="400px";        
        }else if((toggle%2)!=0 && window.innerWidth<600){
     document.querySelectorAll(".navbar__menu li")[i].style.display="none";
     document.querySelector(".container-fluid").style.marginTop="0px";          
            toggle=1
        }else{
        document.querySelectorAll(".navbar__menu li")[i].style.display="inline-block";    
        }
    }
})

//the eventlistener that makes the navigation bar responsive with the size of the viewport 
window.addEventListener("resize",function(){
    for(let i=0;i<3;i++){
    if(window.innerWidth<600 && (toggle%2)!=0){
   document.querySelectorAll(".navbar__menu li")[i].style.display="none"; 
   document.querySelector(".container-fluid").style.marginTop="0px";        
    toggle=1    
    }else if((toggle%2)==0 && window.innerWidth<600){
       document.querySelectorAll(".navbar__menu li")[i].style.display="block";
       document.querySelector(".container-fluid").style.marginTop="400px";  
    }else{
     document.querySelectorAll(".navbar__menu li")[i].style.display="inline-block";
     document.querySelector(".container-fluid").style.marginTop="0px";     
    }
    }
    })




