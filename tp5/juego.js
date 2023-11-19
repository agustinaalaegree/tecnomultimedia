class Juego {

  constructor() {
    this.cuadradoY = 495;
    this.velocidadY = 15;
    this.clicks = 0;
    this.tiempoInicio = millis();
    this.tiempoLimite = 5000;
    this.estado = new EstadoJugando(this, this.tiempoLimite);
  }

  setup() {
    createCanvas(600, 600);
  }

  draw() {
    background(220);
    this.estado.mostrar();
  }

  reiniciarContador() {
    this.tiempoInicio = millis();
    this.clicks = 0;
    this.cuadradoY = 495;
  }

  mousePressed() {
    this.estado.mousePressed();
  }
}
