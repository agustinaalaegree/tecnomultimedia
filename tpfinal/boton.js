class BotonConTexto {
  constructor(x, y, ancho, alto, texto, tamTexto, pantallaDestinoID) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;
    this.tamTexto = tamTexto;
    this.pantallaDestinoID = pantallaDestinoID;
    this.colorNormal = color(0);
    this.colorSobre = color(100);
    this.colorActual = this.colorNormal;
  }

  draw() {
    rectMode(CENTER);
    noStroke();

    if (
      mouseX > this.x - this.ancho / 2 &&
      mouseX < this.x + this.ancho / 2 &&
      mouseY > this.y - this.alto / 2 &&
      mouseY < this.y + this.alto / 2
    ) {
      this.colorActual = this.colorSobre;
    } else {
      this.colorActual = this.colorNormal;
    }

    fill(this.colorActual);
    rect(this.x, this.y, this.ancho, this.alto);
    fill(360);
    textSize(this.tamTexto);
    textAlign(CENTER, CENTER);
    text(this.texto, this.x, this.y);
  }

  mousePressed() {
    if (
      mouseIsPressed &&
      mouseX > this.x - this.ancho / 2 &&
      mouseX < this.x + this.ancho / 2 &&
      mouseY > this.y - this.alto / 2 &&
      mouseY
      < this.y + this.alto / 2
    ) {
      juego.cambiarPantalla(this.pantallaDestinoID);
    }
  }
}
