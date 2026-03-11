// =============================
// CORAZONES CAYENDO
// =============================

const hearts = document.querySelector(".hearts");

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.style.left = Math.random() * 100 + "vw";

heart.style.animationDuration = Math.random() * 3 + 3 + "s";

heart.innerHTML = "💗";

hearts.appendChild(heart);

setTimeout(() => {
heart.remove();
}, 6000);

}

setInterval(createHeart, 300);


// =============================
// REVEAL ANIMATION SCROLL
// =============================

function revealOnScroll(){

const reveals = document.querySelectorAll(".reveal");

for(let i = 0; i < reveals.length; i++){

const windowHeight = window.innerHeight;
const elementTop = reveals[i].getBoundingClientRect().top;
const elementVisible = 120;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll", revealOnScroll);


// =============================
// PETALOS REALISTAS
// =============================

const petalsContainer = document.querySelector(".petals");

function createPetal(){

const petal = document.createElement("div");

petal.classList.add("petal");

const size = Math.random() * 18 + 12;

petal.style.fontSize = size + "px";

petal.style.left = Math.random() * 100 + "vw";

petal.style.animationDuration = Math.random() * 6 + 6 + "s";

petal.innerHTML = "🌸";

petalsContainer.appendChild(petal);

setTimeout(() => {
petal.remove();
}, 12000);

}

setInterval(createPetal, 500);


// =============================
// ESTRELLAS FLOTANDO
// =============================

const starsContainer = document.querySelector(".stars");

for(let i = 0; i < 25; i++){

const star = document.createElement("div");

star.classList.add("star");

star.style.left = Math.random() * 100 + "vw";
star.style.top = Math.random() * 100 + "vh";

star.innerHTML = "✨";

starsContainer.appendChild(star);

}


// =============================
// MUSICA AUTOMATICA
// =============================

window.addEventListener("click", () => {

const music = document.getElementById("music");

if(music){
music.play();
}

});


// =============================
// LIGHTBOX PARA IMAGENES
// =============================

const images = document.querySelectorAll("img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {

img.addEventListener("click", () => {

if(lightbox && lightboxImg){

lightbox.style.display = "flex";
lightboxImg.src = img.src;

}

});

});

if(lightbox){

lightbox.addEventListener("click", () => {

lightbox.style.display = "none";

});

}


// =============================
// CONTADOR DE DIAS JUNTOS
// =============================

const startDate = new Date("2023-08-16");

function updateLoveTime(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

const timer = document.getElementById("love-timer");

if(timer){

timer.innerHTML =
"❤️ Llevamos <b>" + days + " días</b> juntos ❤️";

}

}

updateLoveTime();

setInterval(updateLoveTime, 1000);


// =============================
// TRANSICION HISTORIA ROMANTICA
// =============================

const sections = document.querySelectorAll("section");

function showSections(){

sections.forEach(sec => {

const top = sec.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

sec.classList.add("active");

}

});

}

window.addEventListener("scroll", showSections);

// =============================
// CONSTELACIONES
// =============================

const canvas = document.getElementById("constellation");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i=0;i<120;i++){

stars.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*0.3,
vy:(Math.random()-0.5)*0.3

});

}

function drawStars(){

ctx.clearRect(0,0,canvas.width,canvas.height);

stars.forEach(star=>{

star.x+=star.vx;
star.y+=star.vy;

if(star.x<0 || star.x>canvas.width) star.vx*=-1;
if(star.y<0 || star.y>canvas.height) star.vy*=-1;

ctx.beginPath();
ctx.arc(star.x,star.y,2,0,Math.PI*2);
ctx.fillStyle="white";
ctx.fill();

});

for(let i=0;i<stars.length;i++){

for(let j=i+1;j<stars.length;j++){

let dx = stars[i].x - stars[j].x;
let dy = stars[i].y - stars[j].y;
let dist = Math.sqrt(dx*dx+dy*dy);

if(dist < 120){

ctx.beginPath();
ctx.moveTo(stars[i].x,stars[i].y);
ctx.lineTo(stars[j].x,stars[j].y);
ctx.strokeStyle="rgba(255,255,255,0.1)";
ctx.stroke();

}

}

}

requestAnimationFrame(drawStars);

}

drawStars();

const music = document.getElementById("music")

document.addEventListener("click", () => {

music.play()

}, { once:true })