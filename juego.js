function cambiarEstado(nuevoEstado) {
  estadoJuego = nuevoEstado;
  noLoop();
}

function jugar() {
 
  
  if (estadoJuego === "jugando") {
     
    moverGato();
    dibujarMapa();
    verificarComida();
    dibujarComida();
    image(gatoImage, gatoX - gatoSize / 2, gatoY - gatoSize / 2, gatoSize, gatoSize);

    textSize(24);
    fill(255);
    textAlign(CENTER, TOP);
    text(`Tiempo restante: ${tiempoRestante} s`, width / 2, 10);
    
    fill(255);
    text("¡Estás jugando!", width / 2, 50);
    boton("Inicio", 60, 50, 100, 50, 0);

    if (contadorComida === 10) {
      cambiarEstado("ganaste");
      ganar();
    }

    if (tiempoRestante === 0) {
      cambiarEstado("perdiste");
      perder();
    }
  }

  textSize(24);
  fill(255);
  textAlign(CENTER, BOTTOM);
  text(`Comida comida: ${contadorComida}/10`, width / 2, height - 10);
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
    for (let j = 0; j < mapa[i].length; j++) {
      if (mapa[i][j] === 1) {
        fill(1, 146, 196);
      } else {
        fill(0);
      }
      rect(j * gatoSize, i * gatoSize, gatoSize, gatoSize);
    }
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

function ganar(){
      image(ganasteImage, 0, 0, width, height);
 //boton("Volver a Inicio", width / 2 - 100, height / 2 + 50, 200, 50, 0);
 //boton("Volver a Jugar", width / 2 + 100, height / 2 + 50, 200, 50, 1);
}

function perder(){
      image(perdisteImage, 0, 0, width, height);
 //boton("Volver a Inicio", width / 2 - 100, height / 2 + 50, 200, 50, 0);
 //boton("Volver a Jugar", width / 2 + 100, height / 2 + 50, 200, 50, 1);
}
