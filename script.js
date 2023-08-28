// skriv din kode her.
const roses = document.querySelectorAll("main img");
//console.log(roses);

// vælg alle blomster og add en click eventlistener til dem.
roses.forEach((rose) => rose.addEventListener("click", rotateRose));

// lav en funktion der tilføjer class'en "pluk" til den blomst der bliver klikket på.
function rotateRose() {
    this.classList.toggle("pluk");
}