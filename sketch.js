function setup() {
    createCanvas(500, 400);
    somDaTrilha.loop();
}

function draw() {
    background(imagemDaEstrada);
    mostraAtor(); 
    incluiPontos();
    marcaPonto();
    voltaPosicaoInicialDoCarro(); 
    
     if(pause == false){
        movimentaCarro();
        movimentaAtor(); 
        verificaColisao();
        mostraCarro()
     }
}

let btnPlay = document.getElementById("play");
let btnStop = document.getElementById("stop");
let pause = true;


btnPlay.addEventListener("click", start);
btnStop.addEventListener("click", stop);
  
function start() {
    pause = false
  }

  function stop(){
    pause = true;
    meusPontos = 0;
    movimentaAtor();
    iniciaPosicaoDosCarros();
    verificaColisao();
    
    
  }