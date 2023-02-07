function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(estrada);
  mostraCarro();
  mostraCaminhao();
  moveCarros();
  movCaminhao();
  inicioCarros();
  voltaProInicio();
  inicioCaminhao();
  voltaProInicioCaminhao();
  mostraPlayer();
  movPlayer();
  colisaoPlayer();
  colisaoCaminhao();
  começaDeNovo();
  naoSaiDaTela();
  mostraPontos();
  marcaPonto();
}