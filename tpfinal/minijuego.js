class miniJuego {

  constructor() {
    this.cuadradoY = 495;
                                                                                                                          
    this.velocidadY = 15;
    this.clicks = 0;
    this.tiempoInicio = millis();
    this.tiempoLimite = 8000;
    this.estado = new EstadoJugando(this, this.tiempoLimite);
  }

  setup() {
    createCanvas(600, 600);
  }

  draw() {
    background(220);
    this.estado.mostrar();
  }

  reiniciar() {
    this.cuadradoY = 495;
    this.velocidadY = 15;
    this.clicks = 0;
    this.tiempoInicio = millis();
    this.estado.mostrar();
  }

  mousePressed() {
    this.estado.mousePressed();
  }
}
