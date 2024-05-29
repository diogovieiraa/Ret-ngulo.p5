let xBolinha= 300
let yBolinha= 200
let diametro= 30

let velocidadexBolinha = 6
let velocidadeyBolinha = 6

//variaveidaRaquete
let xRaquete =5
let yRaquete =150
let baseRaquete =10
let alturaRaquete =90

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  velocidadeBolinha();
  colisaoBorda();
  mostraRaquete()
  movimentoRaquete()
}
  function mostraRaquete(){
  rect(xRaquete,yRaquete,baseRaquete,alturaRaquete)
} 
function movimentoRaquete(){
  if(keyIsDown(UP_ARROW))
  yRaquete -= 10
  if(keyIsDown(DOWN_ARROW))
    yRaquete += 10
}
    
  function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro)
    }
  
function velocidadeBolinha(){
  xBolinha += velocidadexBolinha
  yBolinha += velocidadeyBolinha
}
function colisaoBorda(){
  if(xBolinha + 15 > width || xBolinha - 15 < 0)
    velocidadexBolinha *= -1
  if(yBolinha + 15 > height || yBolinha - 15 < 0)
    velocidadeyBolinha *= -1
    
}
