class Juego {

  constructor() {
    this.ID = 1;
    this.escenario = [];
    this.personaje = [];
    this.pov = [];
    this.botonComenzar = new BotonConTexto(300, 475, 100, 50, 'Comenzar', 16, 2);
    this.botonCreditos = new BotonConTexto(300, 550, 100, 50, 'Créditos', 16, 18);
    this.botonsiguiente = new BotonConTexto(300, 475, 100, 50, 'siguiente', 16, 3);
  }

  preload() {
    // Cargar personajes
    this.personaje[0] = loadImage('romeo.png');
    this.personaje[1] = loadImage('julieta.png');
    this.personaje[2] = loadImage('misscapuleto.png');
    this.personaje[3] = loadImage('nodriza.png');
    this.personaje[4] = loadImage('paris.png');
    this.personaje[5] = loadImage('fraylorenzo.png');

    // Cargar escenarios
    this.escenario[0] = loadImage('habitacionjulieta.jpg');
    this.escenario[1] = loadImage('balcon.jpg');
    this.escenario[2] = loadImage('jardin.jpg');
    this.escenario[3] = loadImage('mausoleo.jpg');
    this.escenario[4] = loadImage('final1.jpg');
    this.escenario[5] = loadImage('inicio.jpeg');
    this.escenario[6] = loadImage('inicio2.jpg');
    this.escenario[7] = loadImage('bosque.jpg');

    // Cargar povs
    this.pov[0] = loadImage('assets/pov.png');
    this.pov[1] = loadImage('assets/pov2.png');
    this.pov[2] = loadImage('assets/romeopov.png');
    this.pov[3] = loadImage('assets/julietapov.png');
    this.pov[4] = loadImage('assets/nodrizapov.png');

    //botones
    this.botonComenzar.preload();
    this.botonCreditos.preload();
    this.botonsiguiente.preload();
  }

  setup() {
    createCanvas(600, 600);
    background(0);
    cursor(HAND);
  }

  cambiarPantalla(nuevaPantallaID) {
    this.ID = nuevaPantallaID;
  }

  draw() {
    if (this.ID === 1) {
      image(this.escenario[5], 0, 0);
      this.botonComenzar.draw();
      this.botonCreditos.draw();
    } else if (this.ID=== 2) {
      background(111);
      rect(100,100,100,100);
      text('*gritito*', 100, 100, 100);
      rect(100, 100, 100, 100)
        image(escenario[0], 0, 0);
      image(pov[1], 0, 0);
    } else if (this.ID=== 3) {
      image(escenario[0], 0, 0);
      image(personaje[1], 0, 0);
      image(pov[2], 0, 0);
      image(pov[0], 0, 0);
    } else if (this.ID=== 4) {
      image(escenario[0], 0, 0);
      image(pov[2], 0, 0);
      image(pov[0], 0, 0);
    } else if (this.ID=== 5) {
      image(escenario[0], 0, 0);
      image(personaje[1], 0, 0);
      image(pov[2], 0, 0);
      image(pov[0], 0, 0);
    } else if (this.ID=== 6) {   //final 1
      image(escenario[4], 0, 0);
    } else if (this.ID=== 7) {
      image(escenario[0], 0, 0);
      image(personaje[2], 0, 0);
      image(pov[3], 0, 0);
      image(pov[0], 0, 0);
    } else if (this.ID=== 8) {
      image(escenario[0], 0, 0);
      image(personaje[2], 0, 0);
      image(pov[3], 0, 0);
      image(pov[0], 0, 0);
    } else if (this.ID=== 9) {
      image(escenario[0], 0, 0);
      image(personaje[2], 0, 0);
      image(pov[3], 0, 0);
      image(pov[0], 0, 0);
    } else if (this.ID=== 10) {
      image(escenario[2], 0, 0);
      image(pov[3], 0, 0);
      image(pov[0], 0, 0);
    } else if (this.ID=== 11) {
      image(escenario[2], 0, 0);
      image(pov[1], 0, 0);
    } else if (this.ID=== 12) {
      image(escenario[7], 0, 0);
      image(personaje[5], 0, 0);
      image(pov[3], 0, 0);
      image(pov[0], 0, 0);
    } else if (this.ID=== 13) {
    } else if (this.ID=== 14) {
    } else if (this.ID=== 15) {
    } else if (this.ID=== 16) {
    } else if (this.ID=== 17) {
    }
  }
  mousePressed() {
    this.botonComenzar.mousePressed();
    this.botonCreditos.mousePressed();
    this.botonsiguiente.mousePressed();
  }
}
