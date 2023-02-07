//caminhao

let xCaminhao = 500
let yCaminhao = 176
let compCaminhao = 100
let altCaminhao = 100
let velCaminhao = 3

let colisaoCaminho = false

function mostraCaminhao(){
    image(caminhao, xCaminhao, yCaminhao, compCaminhao, altCaminhao)
}

function movCaminhao(){
  xCaminhao -= velCaminhao
}

function inicioCaminhao(){
  if(voltaProInicioCaminhao(xCaminhao)){
    xCaminhao = 600
  }
}

function voltaProInicioCaminhao(xCaminhao){
  return xCaminhao < -100
}

function colisaoCaminhao(){
  colisaoCaminho = collideRectRect(xCaminhao, yCaminhao, compCaminhao, altCaminhao, xPlayer, yPlayer,comprimentoPlayer, alturaPlayer);
  if (colisaoCaminho){
    colisaoCaminhaoPlayer();
  }
  
}

function colisaoCaminhaoPlayer(){
  yPlayer = 295
}