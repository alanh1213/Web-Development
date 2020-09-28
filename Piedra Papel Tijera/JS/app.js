let jugadorScore = 0;
let cpuScore = 0;

const jugadorScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const resultado_div = document.querySelector(".resultado");
const piedra_div = document.getElementById("pi");
const papel_div = document.getElementById("pa");
const tijera_div = document.getElementById("ti");



//TEST DE CLICKS
piedra_div.addEventListener("click", function(){
    console.log("CLICK EN PIEDRA");
})

papel_div.addEventListener("click", function(){
    console.log("CLICK EN PAPEL");
})

tijera_div.addEventListener("click", function(){
    console.log("CLICK EN TIJERA");
})