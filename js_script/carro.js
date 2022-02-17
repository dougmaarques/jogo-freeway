//código do carro

let xCarros = [600,600,600,600,600,600];
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