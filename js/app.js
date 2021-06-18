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
let toggle = 1;
const ul = document.createElement("ul");
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

//the sectioninteract function aims to make section responsive with scrolling the on the document

sectioninteract=(no)=> {
    var currentscroll = document.documentElement.scrollTop;
    var section1position = document.getElementById("section1").offsetTop;
    var section2position = document.getElementById("section2").offsetTop;
    var section3position = document.getElementById("section3").offsetTop;
    var section4position = document.getElementById("section4").offsetTop;

    if (currentscroll > (section1position - no) && currentscroll < (section2position - no)) {
        document.querySelectorAll(".landing__container")[0].classList.add("active-section");
        document.querySelectorAll(".landing__container")[1].classList.remove("active-section");
        document.querySelectorAll(".landing__container")[2].classList.remove("active-section");
        document.querySelectorAll(".landing__container")[3].classList.remove("active-section");

    } else if (currentscroll > (section2position - no) && currentscroll < (section3position - no)) {
        document.querySelectorAll(".landing__container")[1].classList.add("active-section");
        document.querySelectorAll(".landing__container")[0].classList.remove("active-section");
        document.querySelectorAll(".landing__container")[2].classList.remove("active-section");
        document.querySelectorAll(".landing__container")[3].classList.remove("active-section");

    } else if (currentscroll > (section3position - no) && currentscroll < (section4position - no)) {

        document.querySelectorAll(".landing__container")[2].classList.add("active-section");
        document.querySelectorAll(".landing__container")[0].classList.remove("active-section");
        document.querySelectorAll(".landing__container")[1].classList.remove("active-section");
        document.querySelectorAll(".landing__container")[3].classList.remove("active-section");

    } else if (currentscroll > (section4position - no)) {

        document.querySelectorAll(".landing__container")[3].classList.add("active-section");
        document.querySelectorAll(".landing__container")[0].classList.remove("active-section");
        document.querySelectorAll(".landing__container")[1].classList.remove("active-section");
        document.querySelectorAll(".landing__container")[2].classList.remove("active-section");

    } else {

        document.querySelectorAll(".landing__container")[2].classList.remove("active-section");
        document.querySelectorAll(".landing__container")[0].classList.remove("active-section");
        document.querySelectorAll(".landing__container")[1].classList.remove("active-section");
        document.querySelectorAll(".landing__container")[3].classList.remove("active-section");

    }

}

// the anchorinteract function aims to make the anchor links responsive with the scrolling on the document 

anchorinteract=(no)=> {
    var currentscroll = document.documentElement.scrollTop;
    var section1position = document.getElementById("section1").offsetTop;
    var section2position = document.getElementById("section2").offsetTop;
    var section3position = document.getElementById("section3").offsetTop;
    var section4position = document.getElementById("section4").offsetTop;
    if (currentscroll < (section2position - no)) {
        document.querySelectorAll(".item")[0].classList.add("active");
        document.querySelectorAll(".item")[1].classList.remove("active");
        document.querySelectorAll(".item")[2].classList.remove("active");
        document.querySelectorAll(".item")[3].classList.remove("active");


    } else if (currentscroll > (section2position - no) && currentscroll < (section3position - no)) {
        document.querySelectorAll(".item")[1].classList.add("active");
        document.querySelectorAll(".item")[0].classList.remove("active");
        document.querySelectorAll(".item")[2].classList.remove("active");
        document.querySelectorAll(".item")[3].classList.remove("active");
    } else if (currentscroll > (section3position - no) && currentscroll < (section4position - no)) {
        document.querySelectorAll(".item")[2].classList.add("active");
        document.querySelectorAll(".item")[1].classList.remove("active");
        document.querySelectorAll(".item")[0].classList.remove("active");
        document.querySelectorAll(".item")[3].classList.remove("active");
    } else if (currentscroll > (section4position - no)) {
        document.querySelectorAll(".item")[3].classList.add("active");
        document.querySelectorAll(".item")[1].classList.remove("active");
        document.querySelectorAll(".item")[0].classList.remove("active");
        document.querySelectorAll(".item")[2].classList.remove("active");
    } else {
        document.querySelectorAll(".item")[2].classList.remove("active");
        document.querySelectorAll(".item")[1].classList.remove("active");
        document.querySelectorAll(".item")[0].classList.remove("active");
        document.querySelectorAll(".item")[3].classList.remove("active");
    }
}

//navfunction uses the anchorinteract function and the sectioninteract function for providing the functionality of navbar 
navfunction=()=> {

    if (window.innerWidth < 559) {
        anchorinteract(260)
    } else {
        anchorinteract(200)
    }

    if (window.innerWidth < 559) {
        sectioninteract(260)
    } else {
        sectioninteract(200)
    }

}

clickitem=(no)=> {
    if (window.innerWidth > 559 && window.innerWidth < 600) {
        window.scroll({
            top: document.getElementById("section" + no).offsetTop - 190,
            behavior: "smooth"
        })
    } else if (window.innerWidth < 559) {
        window.scroll({
            top: document.getElementById("section" + no).offsetTop - 250,
            behavior: "smooth"
        });
    } else {
        window.scroll({
            top: document.getElementById("section" + no).offsetTop,
            behavior: "smooth"
        })
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

//The for loop for generating the lists of the nav bar

for (let i = 1; i < 5; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = "Section" + i;
    li.appendChild(a);
    li.classList.add("item")
    ul.appendChild(li);
}

//for setting the first section to be active by default

document.querySelector(".container").appendChild(ul);
if (document.documentElement.scrollTop < (document.getElementById("section2").offsetTop - 200)) {
    document.querySelectorAll(".item")[0].classList.add("active");
}


//the main function that starts the navigation functionality.It contains the sectioninteract function and the anchorinteract  

window.onscroll = function() {
    navfunction()
}


for (let i = 0; i < 4; i++) {
    if (window.innerWidth < 600 && (toggle % 2) != 0) {
        document.querySelectorAll(".navbar__menu li")[i].style.display = "none";
        document.querySelector(".container-fluid").style.marginTop = "0px";
        toggle = 1
    } else if ((toggle % 2) == 0 && window.innerWidth < 600) {
        document.querySelectorAll(".navbar__menu li")[i].style.display = "block";
        document.querySelector(".container-fluid").style.marginTop = "400px";
    } else {
        document.querySelectorAll(".navbar__menu li")[i].style.display = "inline-block";
        document.querySelector(".container-fluid").style.marginTop = "0px";
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
 */

//the eventlistener that gives the functionality of the hamburger button in navigation menu
document.getElementById("btn").addEventListener("click", function() {
    toggle++
    for (let i = 0; i < 4; i++) {
        if ((toggle % 2) == 0 && window.innerWidth < 600) {
            document.querySelectorAll(".navbar__menu li")[i].style.display = "block";
            document.querySelector(".container-fluid").style.marginTop = "400px";
        } else if ((toggle % 2) != 0 && window.innerWidth < 600 && window.innerWidth > 559) {
            document.querySelectorAll(".navbar__menu li")[i].style.display = "none";
            document.querySelector(".container-fluid").style.marginTop = "0px";
            toggle = 1
        } else if ((toggle % 2) != 0 && window.innerWidth < 559) {
            document.querySelectorAll(".navbar__menu li")[i].style.display = "none";
            document.querySelector(".container-fluid").style.marginTop = "200px";
            toggle = 1
        } else {
            document.querySelectorAll(".navbar__menu li")[i].style.display = "inline-block";
        }
    }
})

//the for loop makes 4 event listeners for 4 anchor lists
for (let i = 0; i < 4; i++) {
    document.querySelectorAll(".item")[i].addEventListener("click", function() {
        clickitem(i + 1)
    })
}


//the eventlistener that makes the navigation bar responsive with the size of the viewport 
window.addEventListener("resize", function() {
    for (let i = 0; i < 4; i++) {
        if (window.innerWidth < 600 && (toggle % 2) != 0) {
            document.querySelectorAll(".navbar__menu li")[i].style.display = "none";

            toggle = 1
        } else if ((toggle % 2) == 0 && window.innerWidth < 600) {
            document.querySelectorAll(".navbar__menu li")[i].style.display = "block";

        } else {
            document.querySelectorAll(".navbar__menu li")[i].style.display = "inline-block";

        }
    }
})