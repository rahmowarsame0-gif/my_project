const burger = document.querySelector('.burger');
const navBar = document.querySelector('.nav_bar');

burger.addEventListener('click', () => {
    navBar.classList.toggle('show');
    burger.classList.toggle('active');
});



let index = 0;
let cards = document.getElementById("cards"); 
let cardWidth = 310; 
let totalCards = document.querySelectorAll(".cardi").length;
let visibleCards = 3;

function next(){
    if(index < totalCards - visibleCards){
        index++;
        cards.style.transform = `translateX(-${index * cardWidth}px)`;
    }
}

function prev(){
    if(index > 0){
        index--;
        cards.style.transform = `translateX(-${index * cardWidth}px)`;
    }
}

//testimonial


let testimonials = document.querySelectorAll(".testimonial");
let dots = document.querySelectorAll(".dot");

function showTestimonial(index){
    testimonials.forEach(t => t.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    testimonials[index].classList.add("active");
    dots[index].classList.add("active");
}



// Book Appointment
document.getElementById("appointmentForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;

    if(name === ""){
        alert("Fadlan magaca geli");
    }else{
        alert("Mahadsanid " + name + ", ballantaada waa la diiwaan geliyey");
        this.reset();
    }
      document.getElementById("appointmentForm").reset();
});


