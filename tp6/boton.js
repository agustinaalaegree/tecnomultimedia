class BotonConTexto {

  constructor(x, y, ancho, alto, texto, tamTexto, pantallaDestino) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;
    this.tamTexto = tamTexto;
    this.pantallaDestino = pantallaDestino;
  }

  setup() {
  }

  draw() {
    rectMode(CENTER);
    noStroke();
    fill(0);
    rect(this.x, this.y, this.ancho, this.alto);
    fill(360);
    textSize(this.tamTexto);
    textAlign(CENTER, CENTER);
    // textFont(this.fuenteTexto);
    text(this.texto, this.x, this.y);
  }

  verificarClick() {
    if (mouseIsPressed && on) {
      if (procesarClick && mouseX > this.x - this.ancho / 2 && mouseX < this.x + this.ancho / 2 && mouseY > this.y - this.alto / 2 && mouseY < this.y + this.alto / 2) {
        ID = this.pantallaDestino;
        procesarClick = false;
      }
    }
  }
}
