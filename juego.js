function cambiarEstado(nuevoEstado) {
  estadoJuego = nuevoEstado;
  noLoop();
}


function jugar (){
      moverGato();
      dibujarMapa();
      verificarComida();
      image(mapaImage, 0, 0, 600, 600);
      dibujarComida();
      image(gatoImage, gatoX - gatoSize / 2, gatoY - gatoSize / 2, gatoSize, gatoSize);

      textSize(24);
      fill(255);
      textAlign(CENTER, TOP);
      text(`Tiempo restante: ${tiempoRestante} s`, 135, 20);

 
   if (contadorComida === 10) {
      cambiarEstado("ganaste");
      ganar();
      boton("Inicio", 80, 570, 130, 35, 0);

    }

    if (tiempoRestante === 0) {
      cambiarEstado("perdiste");
    }
    
    textSize(24); 
    fill(255);
    text(`Comida comida: ${contadorComida}/10`, 460, 20);

}
function moverGato() {
  let nuevaX = gatoX;
  let nuevaY = gatoY;

  if (keyIsDown(LEFT_ARROW)) {
    nuevaX -= velocidad;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    nuevaX += velocidad;
  }
  if (keyIsDown(UP_ARROW)) {
    nuevaY -= velocidad;
  }
  if (keyIsDown(DOWN_ARROW)) {
    nuevaY += velocidad;
  }

  nuevaX = constrain(nuevaX, 0, width - gatoSize);
  nuevaY = constrain(nuevaY, 0, height - gatoSize);

  if (esPosicionValida(nuevaX, nuevaY)) {
    gatoX = nuevaX;
    gatoY = nuevaY;
  }
}

function dibujarMapa() {
  for (let i = 0; i < mapa.length; i++) {
  }
}

function inicializarComida() {
  while (comidas.length < 10) {
    let fila = floor(random(mapa.length));
    let columna = floor(random(mapa[0].length));
    if (mapa[fila][columna] === 0) {
      comidas.push(createVector(columna, fila));
    }
  }
}

function dibujarComida() {
  for (let comida of comidas) {
    let x = comida.x * gatoSize;
    let y = comida.y * gatoSize;
    image(comidaImage, x, y, gatoSize, gatoSize);
  }
}

function esPosicionValida(x, y) {
  let fila = floor(y / gatoSize);
  let columna = floor(x / gatoSize);

  if (fila >= 0 && fila < mapa.length && columna >= 0 && columna < mapa[0].length) {
    return mapa[fila][columna] === 0;
  }
  return false;
}

function verificarComida() {
  for (let i = comidas.length - 1; i >= 0; i--) {
    let comida = comidas[i];
    let x = comida.x * gatoSize;
    let y = comida.y * gatoSize;
    let distancia = dist(gatoX, gatoY, x + gatoSize / 2, y + gatoSize / 2);
    if (distancia < gatoSize / 2) {
      comidas.splice(i, 1);
      contadorComida++;
    }
  }
}

function restarTiempo() {
  if (tiempoRestante > 0) {
    tiempoRestante--;
  }
}

function Ganar() {
  image(ganasteImage, 0, 100, width, 229);
}

function Perder() {
  image(perdisteImage, 0, 100, width, 229);
}
