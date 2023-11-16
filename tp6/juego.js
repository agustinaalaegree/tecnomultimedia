class Juego {

  constructor() {
    this.pantallas = new Pantallas();
    this.pantallaActual = 0; // Inicia en la pantalla de inicio
  }
  
  preload() {
    this.pantallas.preload();
  }

  setup() {
    createCanvas(600, 600);
    background(0);
    cursor(HAND);
  }

  draw() {
    this.pantallas.draw();
  }

  mousePressed() {
  }
}
