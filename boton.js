function boton(texto, x, y, ancho, alto, destino) {
  // Función para crear un botón
  let sobreBoton = mouseX > x - ancho / 2 && mouseX < x + ancho / 2 && mouseY > y - alto / 2 && mouseY < y + alto / 2;

  if (sobreBoton) {
    fill(255, 0, 0);
 
  } else {
    fill(34, 100, 185);
 
  }
  stroke(84, 161, 237);
  strokeWeight(3);
  rect(x-75, y-25, ancho, alto, 10);
  noStroke();
  fill(255);
  text(texto, x, y);

  if (sobreBoton && mouseIsPressed) {
    estadoP = estadosP[destino];
  }
}
