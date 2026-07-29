/*=====================================================
    Wildlife Genomics Workshop
    JavaScript
======================================================*/


/*=====================================================
NAVBAR SCROLL EFFECT
======================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});


/*=====================================================
TEAM CAROUSEL
======================================================*/

const cards = document.querySelectorAll(".team-card");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

let current = 0;

function showCard(index){

    cards.forEach(card => {

        card.classList.remove("active");

    });

    cards[index].classList.add("active");

}

nextBtn.addEventListener("click",()=>{

    current++;

    if(current >= cards.length){

        current = 0;

    }

    showCard(current);

});

prevBtn.addEventListener("click",()=>{

    current--;

    if(current < 0){

        current = cards.length-1;

    }

    showCard(current);

});

showCard(current);



/*=====================================================
AUTO PLAY CAROUSEL
======================================================*/

let autoSlide = setInterval(nextSlide,7000);

function nextSlide(){

    current++;

    if(current >= cards.length){

        current=0;

    }

    showCard(current);

}

const carousel = document.querySelector(".carousel");

carousel.addEventListener("mouseenter",()=>{

    clearInterval(autoSlide);

});

carousel.addEventListener("mouseleave",()=>{

    autoSlide = setInterval(nextSlide,7000);

});



/*=====================================================
FADE IN ANIMATION
======================================================*/

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

threshold:0.15

});


document.querySelectorAll("section").forEach(section=>{

    section.classList.add("fade-section");

    observer.observe(section);

});



/*=====================================================
BACK TO TOP BUTTON
======================================================*/

const topButton = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



/*=====================================================
ACTIVE NAVBAR LINK
======================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

    let currentSection="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-150;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + currentSection){

            link.classList.add("active");

        }

    });

});



/*=====================================================
SMOOTH BUTTON RIPPLE
======================================================*/

const buttons = document.querySelectorAll(".btn,.btn-outline");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

const radius=diameter/2;

circle.style.width=circle.style.height=`${diameter}px`;

circle.style.left=`${e.clientX-this.offsetLeft-radius}px`;

circle.style.top=`${e.clientY-this.offsetTop-radius}px`;

circle.classList.add("ripple");

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});



/*=====================================================
LOADING ANIMATION
======================================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});



/*=====================================================
END
======================================================*/
