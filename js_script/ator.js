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