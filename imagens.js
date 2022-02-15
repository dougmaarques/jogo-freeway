//código imagens

let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons
let somTrilha;
let somColisao;
let somPontos;

function preload(){
  imagemEstrada = loadImage("Imagens/estrada.png");
  imagemAtor = loadImage ("Imagens/ator-1.png")
  imagemCarro = loadImage ("Imagens/carro-1.png")
  imagemCarro2 = loadImage ("Imagens/carro-2.png")
  imagemCarro3 = loadImage ("Imagens/carro-3.png")
  imagemCarros = [imagemCarro,imagemCarro2,imagemCarro3,imagemCarro,imagemCarro2,imagemCarro3]
  somTrilha = loadSound ("sons/trilha.mp3");
  somColisao = loadSound ("sons/colidiu.mp3");
  somPontos = loadSound ("sons/pontos.wav");
  
}