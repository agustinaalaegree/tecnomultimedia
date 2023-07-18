//Variables globales
int pantalla = 1;
PImage[] personaje; // Declaración de arreglo
PImage[] escenario; // Declaración de arreglo
PImage[] pov; // Declaración de arreglo
color colorBoton; // Color del botón en hexadecimal
PFont miFuenteboton;
PFont miFuentetexto;



void setup() {
  size(600, 600);
  background (360, 360, 360);
  cursor (HAND);
  miFuenteboton = createFont("CourierNewPS-BoldMT-48.ttf", 32);
  miFuentetexto = createFont("SitkaSubheading-Bold-48.ttf", 32);


  // Inicialización del arreglos
  personaje = new PImage[5];
  escenario = new PImage[9];
  pov = new PImage[5];


  // Cargar las imágenes en el arreglo personaje
  personaje[0] = loadImage("romeo.png");
  personaje[1] = loadImage("julieta.png");
  personaje[2] = loadImage("señoracapuleto.png");
  personaje[3] = loadImage("nodriza.jpg");
  personaje[4] = loadImage("paris.jpg");

  // Cargar las imágenes en el arreglo escenario
  escenario[0] = loadImage("habitacionjulieta.jpg");
  escenario[1] = loadImage("balcon.jpg");
  escenario[2] = loadImage("jardin.jpg");
  escenario[3] = loadImage("mausoleo.jpg");
  escenario[4] = loadImage("final1.jpg");
  escenario[5] = loadImage("final2.jpg");
  escenario[6] = loadImage("final3.jpg");
  escenario[7] = loadImage("inicio.jpeg");
  escenario[8] = loadImage("inicio2.jpg");


  // Cargar las imágenes en el arreglo pov
  pov[0] = loadImage("pov.png");
  pov[1] = loadImage("pov2.png");
  pov[2] = loadImage("romeopov.png");
  pov[3] = loadImage("julietapov.png");
  pov[4] = loadImage("nodrizapov.png");

  colorBoton= #9E8F62;
}


void draw() {
  background(220);

  // Dibujar pantallas
  if (pantalla == 1) {
    inicio();
  } else if (pantalla == 2) {
    pantalla2();
  } else if (pantalla == 3) {
    pantalla3();
  } else if (pantalla == 4) {
  } else if (pantalla == 5) {
  } else if (pantalla == 6) {
  } else if (pantalla == 7) {
  } else if (pantalla == 8) {
  } else if (pantalla == 9) {
  } else if (pantalla == 10) {
  } else if (pantalla == 11) {
  } else if (pantalla == 12) {
    creditos();
  }
}
