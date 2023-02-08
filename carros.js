//carros
let xCarros = [550, 550, 550];
let yCarros = [110, 155, 265];
let compCarros = 50;
let altCarros = 30;
let velCarros = [3, 4, 5]


function mostraCarro(){
  for (let c = 0; c < Carros.length; c++){
    image(Carros[c], xCarros[c], yCarros[c], compCarros, altCarros);
  } 
}

function moveCarros(){
  for(let c = 0; c < Carros.length; c++){
    xCarros[c] -= velCarros[c]
    
}
}

function inicioCarros(){
  for(let c = 0; c < Carros.length; c++)
  if (voltaProInicio(xCarros[c])){
    xCarros[c] = 600
  }
}

function voltaProInicio (xCarros){
  return xCarros < -50
}