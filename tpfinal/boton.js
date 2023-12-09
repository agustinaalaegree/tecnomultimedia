

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

  preload() {
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
      mouseY < this.y + this.alto / 2
      ) {
      if (this.pantallaDestinoID !== juego.ID) {
        if (this.texto === 'A') {
          if (juego.ID === 3) {
            juego.cambiarPantalla(4);
          } else if (juego.ID === 4) {
            juego.cambiarPantalla(6);
          } else if (juego.ID === 5) {
            juego.cambiarPantalla(7);
          } else if (juego.ID === 7) {
            juego.cambiarPantalla(8);
          } else if (juego.ID === 8) {
            juego.cambiarPantalla(9);
          } else if (juego.ID === 9) {
            juego.cambiarPantalla(10);
          } else if (juego.ID === 10) {
            juego.cambiarPantalla(6); //final 1
          } else if (juego.ID === 11) {
            juego.cambiarPantalla(12);
          } else if (juego.ID === 12) {
            juego.cambiarPantalla(13);
          } else if (juego.ID === 13) {
            juego.cambiarPantalla(14);
          } else if (juego.ID === 14) {
            juego.cambiarPantalla(15);
          } else if (juego.ID === 15) {
            juego.cambiarPantalla(16); //final 2
          }
        } else if (this.texto === 'B') {
          if (juego.ID === 4) {
            juego.cambiarPantalla(5);
          } else if (juego.ID === 10) {
            juego.cambiarPantalla(11);
          } else if (juego.ID === 15) {
            juego.cambiarPantalla(17); //final3
          }
        } else if (this.texto === 'Siguiente') {
          if (juego.ID === 2) {
            juego.cambiarPantalla(19);
          } else if (juego.ID === 19) {
            juego.cambiarPantalla(3);
          }
        } else  {
            juego.cambiarPantalla(this.pantallaDestinoID);
          }
        }
      }
    }
}
