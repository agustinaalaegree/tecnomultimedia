
//Agustina Alegre 88166/0
//Variables globales
int pantalla = 1;
PImage[] personaje; // Declaración de arreglo
PImage[] escenario; // Declaración de arreglo
PImage[] pov; // Declaración de arreglo
color colorBoton; // Color del botón en hexadecimal
color colorDialogo; // Color del botón en hexadecimal

PFont miFuenteboton;
PFont miFuentetexto;

boolean procesarClick = true;
boolean on = true;



void setup() {
  size(600, 600);
  background (360, 360, 360);
  cursor (HAND);
  miFuenteboton = createFont("CourierNewPS-BoldMT-48.ttf", 32);
  miFuentetexto = createFont("SitkaSubheading-Bold-48.ttf", 32);


  // Inicialización del arreglos
  personaje = new PImage[6];
  escenario = new PImage[10];
  pov = new PImage[5];


  // Cargar las imágenes en el arreglo personaje
  personaje[0] = loadImage("romeo.png");
  personaje[1] = loadImage("julieta.png");
  personaje[2] = loadImage("señoracapuleto.png");
  personaje[3] = loadImage("nodriza.png");
  personaje[4] = loadImage("paris.png");
  personaje[5] = loadImage("fraylorenzo.png");

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
  escenario[9] = loadImage("bosque.jpg");


  // Cargar las imágenes en el arreglo pov
  pov[0] = loadImage("pov.png");
  pov[1] = loadImage("pov2.png");
  pov[2] = loadImage("romeopov.png");
  pov[3] = loadImage("julietapov.png");
  pov[4] = loadImage("nodrizapov.png");

  colorBoton= #9E8F62;
  colorDialogo= #93A89B;
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
    pantalla4();
  } else if (pantalla == 5) {
    pantalla5();
  } else if (pantalla == 6) {
    pantalla6();
  } else if (pantalla == 7) {
    pantalla7();
  } else if (pantalla == 8) {
    pantalla8();
  } else if (pantalla == 9) {
    pantalla9();
  } else if (pantalla == 10) {
    pantalla10();
  } else if (pantalla == 11) {
    pantalla11();
  } else if (pantalla == 12) {
    pantalla12();
  } else if (pantalla == 13) {
    pantalla13();
  } else if (pantalla == 14) {
    pantalla14();
  } else if (pantalla == 15) {
    pantalla15();
  } else if (pantalla == 16) {
    pantalla16();
  } else if (pantalla == 17) {
    pantalla17();
  } else if (pantalla == 18) {
    creditos();
  }
}

void mousePressed() {
  if (procesarClick) {

    if (pantalla == 1) {
      if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height - 120 && mouseY < height - 80) {
        pantalla = 2;
      } else if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height - 70 && mouseY < height - 30) {
        pantalla = 18;
      }
    } else if (pantalla == 2) {
      if (mouseX > width / 2 - 175 && mouseX < width / 2 + 175 && mouseY > height / 2 - 125 && mouseY < height / 2 + 125) {
        pantalla = 3;
      }
    } else if (pantalla == 3) {
      if (mouseX > width - 370 && mouseX < width - 130 && mouseY > height - 180 && mouseY < height - 40) {
        pantalla = 4;
      }
    } else if (pantalla == 4) {
      if (mouseX > width - 275 && mouseX < width - 35 && mouseY > height - 180 && mouseY < height - 130) {
        pantalla = 6;
      } else if (mouseX > width - 210 && mouseX < width + 160 && mouseY > height - 100 && mouseY < height - 50) {
        pantalla = 5;
      }
    } else if (pantalla == 5) {
      if (mouseX > width - 365 && mouseX < width - 55 && mouseY > height - 180 && mouseY < height - 40) {
        pantalla = 7;
      }
    } else if (pantalla == 6) {
      if (mouseX > width / 4 - 75 && mouseX < width / 4 + 75 && mouseY > height - 120 && mouseY < height - 80) {
        pantalla = 4;
      } else if (mouseX > width - 225 && mouseX < width - 25 && mouseY > height - 120 && mouseY < height - 80) {
        pantalla = 1;
      }
    } else  if (pantalla == 7) {
      if (mouseX > width - 240 - 310 / 2 && mouseX < width - 240 + 310 / 2 &&
        mouseY > height - 140 - 140 / 2 && mouseY < height - 140 + 140 / 2) {
        pantalla = 8;
      }
    } else if (pantalla == 8) {
      if (mouseX > width - 240 - 310 / 2 && mouseX < width - 240 + 310 / 2 &&
        mouseY > height - 140 - 140 / 2 && mouseY < height - 140 + 140 / 2) {
        pantalla = 9;
      }
    } else if (pantalla == 9) {
      if (mouseX > width - 240 - 310 / 2 && mouseX < width - 240 + 310 / 2 &&
        mouseY > height - 140 - 140 / 2 && mouseY < height - 140 + 140 / 2) {
        pantalla = 10;
      }
    } else if (pantalla == 10) {
      if (mouseX > width - 210 - 370 / 2 && mouseX < width - 210 + 370 / 2 &&
        mouseY > height - 180 - 50 / 2 && mouseY < height - 180 + 50 / 2) {
        pantalla = 6;
      } else if (mouseX > width - 210 - 370 / 2 && mouseX < width - 210 + 370 / 2 &&
        mouseY > height - 100 - 50 / 2 && mouseY < height - 100 + 50 / 2) {
        pantalla = 11;
      }
    } else if (pantalla == 11) {
      if (mouseX > width / 2 - 175 && mouseX < width / 2 + 175 && mouseY > height / 2 - 125 && mouseY < height / 2 + 125) {
        pantalla = 12;
      }
    } else if (pantalla == 12) {
      if (mouseX > width - 240 - 310 / 2 && mouseX < width - 240 + 310 / 2 &&
        mouseY > height - 140 - 140 / 2 && mouseY < height - 140 + 140 / 2) {
        pantalla = 13;
      }
    } else if (pantalla == 13) {
      if (mouseX > width / 2 - 350 / 2 && mouseX < width / 2 + 350 / 2 &&
        mouseY > height / 2 - 250 / 2 && mouseY < height / 2 + 250 / 2) {
        pantalla = 14;
      }
    } else if (pantalla == 14) {
      if (mouseX > width - 220 - 310 / 2 && mouseX < width - 220 + 310 / 2 &&
        mouseY > height - 140 - 140 / 2 && mouseY < height - 140 + 140 / 2) {
        pantalla = 15;
      }
    } else if (pantalla == 15) {
      if (mouseX > width - 210 - 370 / 2 && mouseX < width - 210 + 370 / 2 &&
        mouseY > height - 180 - 50 / 2 && mouseY < height - 180 + 50 / 2) {
        pantalla = 16;
      } else if (mouseX > width - 210 - 370 / 2 && mouseX < width - 210 + 370 / 2 &&
        mouseY > height - 100 - 50 / 2 && mouseY < height - 100 + 50 / 2) {
        pantalla = 17;
      }
    } else if (pantalla == 16) {
      if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height - 180 && mouseY < height - 140) {
        pantalla = 1;
      }
    } else if (pantalla == 17) {
      if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height - 180 && mouseY < height - 140) {
        pantalla = 1;
      }
    } else if (pantalla == 18) {
      if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height - 180 && mouseY < height - 140) {
        pantalla = 1;
      }
    }
  }
}




void cambiarPantalla() {


  // Activar los eventos de clic en la nueva pantalla
  procesarClick = true;
}
