// Variables globales
int pantalla = 1;
PImage[] personaje; // Declaración del arreglo de imágenes
PImage[] escenario; // Declaración del arreglo de imágenes
PImage[] pov; // Declaración del arreglo de imágenes


void setup() {
  size(600, 600);
  background (360, 360, 360);
  cursor (HAND);

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
}

void draw() {
  background(220);

  // Dibujar pantallas
  if (pantalla == 1) {
    inicio();
  } else if (pantalla == 2) {
    image(escenario[0], 0, 0);
    image(personaje[1], 0, 0);
    image(pov[2], 0, 0);
    image(pov[0], 0, 0);
  } else if (pantalla == 3) {
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

void inicio() {
  image(escenario[7], 0, 0);
  textSize(20);
  textAlign(CENTER, CENTER);

  // Botón Siguiente
  rectMode(CENTER);
  fill(#9E8F62);
  rect(width / 2, height - 50, 150, 40);
  fill(255);
  textSize(16);
  text("creditos", width / 2, height - 50);

  // Botón Créditos
  rectMode(CENTER);
  fill(#9E8F62);
  rect(width/2, height - 100, 150, 40);
  fill(255);
  textSize(16);
  text("comenzar", width / 2, height - 100);
}

void creditos() {
  image(escenario[8], 0, 0);
  image(pov[1], 0, 0);

  textSize(20);
  textAlign(CENTER, CENTER);
  text("creditos", width/2, height/4);
  text("programacion ...   ", width/2, height/3);


  // Botón Siguiente
  rectMode(CENTER);
  fill(0);
  text("creditos", width / 2, height - 50);
  fill(255);
  textSize(16);
  text("inicio", width/2, height - 50);
}



void mousePressed() {

  if (pantalla == 1) {
    if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height - 70 && mouseY < height - 30) {
      pantalla = 12;
    } else if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height - 120 && mouseY < height - 80) {
      pantalla = 2;
    }
  }
}
