//jogador
let xPlayer = 275
let yPlayer = 340
let comprimentoPlayer = 67
let alturaPlayer = 67
let colisao = false
let pontos = 0

function mostraPlayer(){
  image(player, xPlayer, yPlayer, comprimentoPlayer, alturaPlayer);
}

function movPlayer(){
  if (keyIsDown(DOWN_ARROW)){
    yPlayer += 3.5
  }
  if (keyIsDown(UP_ARROW)){
    yPlayer -= 3.5
  }
}

function colisaoPlayer(){
  for (let c = 0; c < Carros.length; c++){
    colisao = collideRectRect(xCarros[c], yCarros[c],  compCarros, altCarros, xPlayer, yPlayer, comprimentoPlayer, alturaPlayer);
    if (colisao){
      colidiu();
      bateu.play();
      
    if (perderPontos()){
      pontos -= 1      
      }
    }
  }
}

function colidiu(){
  yPlayer = 340
}

function começaDeNovo(){
  if (yPlayer < -50){
    yPlayer = 410
  }
}
function naoSaiDaTela() {
  if (yPlayer > 360){
    yPlayer = 360
  }
}

function mostraPontos() {
  textAlign(CENTER);
  fill(255, 255, 255)
  textSize(30);
  text(pontos, width /5, 30);
}

function marcaPonto(){
  if(yPlayer < 10){
    pontos += 1;
    colidiu();
    ganhou.play();
  }
}

function perderPontos(){
  return pontos > 0;
}