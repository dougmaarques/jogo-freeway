function setup() {
  createCanvas(700, 400);
}


function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}


// imagens

let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage ("imagens/ator-1.png")
  imagemCarro = loadImage ("imagens/carro-1.png")
  imagemCarro2 = loadImage ("imagens/carro-2.png")
  imagemCarro3 = loadImage ("imagens/carro-3.png")
  imagemCarros = [imagemCarro,imagemCarro2,imagemCarro3,imagemCarro,imagemCarro2,imagemCarro3]

}

// ator

//código ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0


function mostraAtor(){
  image(imagemAtor,xAtor,yAtor,30,30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){yAtor -=3}
  if(keyIsDown(DOWN_ARROW)){
    if(podeMover())
    yAtor +=3
  }
  if(keyIsDown(LEFT_ARROW)){xAtor -= 3.2}
  if(keyIsDown(RIGHT_ARROW)){xAtor += 3.2}
  
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorPosicaoInicial();
      if(pontosMaiorZero()){
      meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60)) 
  text(meusPontos,width / 5, 28);
}

function marcaPonto(){
  if(yAtor < 15){
     meusPontos += 1;
    voltaAtorPosicaoInicial();
    
     }
}

function pontosMaiorZero(){
  return meusPontos > 0
}

function podeMover (){
  return yAtor < 366;
}


//carro

//código do carro

let xCarros = [700,700,700,700,700,700];
let yCarros = [45, 100, 155,210,270,318];
let velocidadeCarros = [2, 3, 2.5,5,3.3,2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image (imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for ( i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarro(){
  for ( i = 0; i < imagemCarros.length;i++){
    if (passouTodaATela(xCarros[i])){
        xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < -50;
}
