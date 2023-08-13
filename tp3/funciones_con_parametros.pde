void crearBotonYTexto(float x, float y, float ancho, float alto, color colorHex, String texto, int tamTexto, PFont fuenteTexto, color colorTexto, int pantallaDestino) {
  rectMode(CENTER);
  noStroke();
  fill(colorHex);
  rect(x, y, ancho, alto);
  fill(colorTexto);
  textSize(tamTexto);
  textAlign(CENTER, CENTER);
  // textFont(fuenteTexto);
  text(texto, x, y);
  if (mousePressed && on) {
    if (procesarClick && mouseX > x - ancho/2 && mouseX < x + ancho/2 && mouseY > y - alto/2 && mouseY < y + alto/2) {

      pantalla = pantallaDestino;
      procesarClick = false;
    }
  }
}
