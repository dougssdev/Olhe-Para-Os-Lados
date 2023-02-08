let estrada
let carro1
let carro2
let caminhao
let player

function preload(){
  
  caminhao =loadImage("imagens/CAMINHAO.png");
  carro1 = loadImage("imagens/CARRO1.png");
  carro2 = loadImage("imagens/CARRO2.png");
  carro3 = loadImage ("imagens/CARRO3.png");
  estrada = loadImage("imagens/ESTRADA.png");
  player = loadImage("imagens/HOMI.png");
  Carros = [carro1, carro2, carro3]
  trilha = loadSound ("audio/Música sem título.mp3");
  bateu = loadSound ("audio/mixkit-quick-jump-arcade-game-239.wav");
  ganhou = loadSound ("audio/mixkit-unlock-game-notification-253.wav");
  
}