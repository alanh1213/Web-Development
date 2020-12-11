let jugadorScore = 0;
let cpuScore = 0;

const jugadorScore_span = document.getElementById("player-score");
const cpuScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const resultado_div = document.querySelector(".resultado > p");
const piedra_div = document.getElementById("pi");
const papel_div = document.getElementById("pa");
const tijera_div = document.getElementById("ti");
const colorScore = document.getElementById("cuadradoScore");



function getCPUChoice(){
    const piedraPapelTijera = ["pi", "pa", "ti"];
    const randomNumber = Math.floor(Math.random() * 3);

    return piedraPapelTijera[randomNumber];
}

function ConversorPalabra(palabra){
    if(palabra === "pi")return "Piedra";
    if(palabra === "pa")return "Papel";
    return "Tijera"
}

function Ganar(eleccionJugador, eleccionCPU){

    colorScore.style.borderColor = "#ADFF2F";
    jugadorScore++;
    jugadorScore_span.innerHTML = jugadorScore;
    cpuScore_span.innerHTML = cpuScore;
    resultado_div.innerHTML = ConversorPalabra(eleccionJugador) + " vence a " + ConversorPalabra(eleccionCPU) + ". Ganas 1 punto!";
}

function Perder(eleccionJugador, eleccionCPU){
    colorScore.style.borderColor = "red";
    cpuScore++;
    jugadorScore_span.innerHTML = jugadorScore;
    cpuScore_span.innerHTML = cpuScore;
    resultado_div.innerHTML = ConversorPalabra(eleccionJugador) + " pierde con " + ConversorPalabra(eleccionCPU) + ". CPU gana 1 punto!";
}

function Empate(eleccionJugador, eleccionCPU){
    colorScore.style.borderColor = "white";
    jugadorScore_span.innerHTML = jugadorScore;
    cpuScore_span.innerHTML = cpuScore;
    resultado_div.innerHTML = ConversorPalabra(eleccionJugador) + " empata con " + ConversorPalabra(eleccionCPU);
}




function jugar(eleccionJugador){
    const cpuEleccion = getCPUChoice();
    console.log(cpuEleccion);
    switch (eleccionJugador + cpuEleccion)
    {
        case("piti"):
        case("papi"):
        case("tipa"):
            //GANA EL JUGADOR
            Ganar(eleccionJugador, cpuEleccion);
            break;
        case("pipa"):
        case("pati"):
        case("tipi"):
            //GANA LA CPU
            Perder(eleccionJugador, cpuEleccion);
            break;
        case("pipi"):
        case("papa"):
        case("titi"):
            //EMPATE
            Empate(eleccionJugador, cpuEleccion);
            break;
    }

    
}

function main(){
    piedra_div.addEventListener("click", function(){
        jugar("pi")
        console.log("CLICK PIEDRA");
    })

    papel_div.addEventListener("click", function(){
        jugar("pa")
    })

    tijera_div.addEventListener("click", function(){
        jugar("ti")
    })
}

main();