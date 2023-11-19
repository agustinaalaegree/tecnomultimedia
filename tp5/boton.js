class BotonReiniciar {
  constructor(x, y, ancho, alto, etiqueta, estadoJugando, juego) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.etiqueta = etiqueta;
    this.estadoJugando = estadoJugando;
    this.juego = juego;
    this.colorNormal = color(0); // Color normal del botón
    this.colorSobre = color(100); // Color cuando el mouse está sobre el botón
  }

  mostrar() {
    // Verifica si el mouse está sobre el botón
    if (this.mouseSobre()) {
      fill(this.colorSobre);
    } else {
      fill(this.colorNormal);
    }
    rect(this.x, this.y, this.ancho, this.alto);
    fill(255);
    textSize(16);
    text(this.etiqueta, this.x - 80 + this.ancho, this.y - 15 + this.alto);
  }

  reiniciarJuego() {
    this.juego.reiniciarContador(); // Llama al método de reinicio del juego
  }

  mouseSobre() {
    // Verifica si el mouse está sobre el botón
    return mouseX > this.x && mouseX < this.x + this.ancho && mouseY > this.y && mouseY < this.y + this.alto;
  }
  
  // Manejar eventos de clic
  mousePressed() {
    // Verifica si se hizo clic en el botón reiniciar
    if (this.mouseSobre()) {
      this.reiniciarJuego();
    }
  }
}
