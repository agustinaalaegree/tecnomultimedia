int P = 1;
int tiempoPantalla = 7000;
int tiempoInicio;
PImage foto1, foto2;
float posYTexto = 400; // Posición vertical inicial del texto en la pantalla 2

void setup() {
  size(400, 400);
  foto1  = loadImage("1.jpg");
  foto2  = loadImage("2.jpg");
}

void draw() {
  background(255);
  noStroke();

  //pantalla 1
  if (P == 1) {
    image(foto1, 0, 0);
    textAlign(CENTER, CENTER);

    //inicio
    if (mouseX > 150 && mouseX < 250 && mouseY > 300 && mouseY < 350) {
      fill(#EBCA02);
      rect(150, 300, 100, 50);
      fill(255);
      textSize(20);
      text("Inicio", width / 2, 325);
    } else {
      fill(#278BFF);
      rect(150, 300, 100, 50);
      fill(0);
      textSize(20);
      text("Inicio", width / 2, 325);
    }
  }

  //pantalla 2
  else if (P == 2) {
    image(foto2, 0, 0);
    textSize(24);
    text("Serrucho manual", 260, posYTexto);
    textSize(18);
    text("Los ancianos egipcios usaron\nserruchos hace más de\n5000 años atrás.\nRecién en 1777, Samuel\nMiller patentó en Inglaterra.", 260, posYTexto+100);
    posYTexto -= 1; // Puedes ajustar la velocidad cambiando el valor aquí
  }

  //pantalla 3
  else if (P == 3) {
    image(foto2, 0, 0);
    textSize(18);
    text("Un serrucho es una herramienta\nmanual utilizada para practicar\ncortes, sobre todo en madera.\nAdemás es un tipo de\nsierra de hoja dentada y\ntrapezoidal que por el\nextremo más ancho va\nunida a un solo mango\nde madera o de plástico. ", 260, posYTexto-150);
    posYTexto += 0.8;
  }

  //pantalla 4
  else if (P == 4) {
    textAlign(CENTER, CENTER);
    image(foto1, 0, 0);

    //reiniciar
    if (mouseX > 150 && mouseX < 250 && mouseY > 300 && mouseY < 350) {
      fill(#EBCA02);
      rect(150, 300, 100, 50);
      fill(255);
      textSize(20);
      text("Reiniciar", width / 2, 325);
    } else {
      fill(#278BFF);
      rect(150, 300, 100, 50);
      fill(0);
      textSize(20);
      text("Reiniciar", width / 2, 325);
    }
  }

  //cambiar a la siguiente pantalla.
  if (millis() - tiempoInicio >= tiempoPantalla && P < 4) {
    P++;
    tiempoInicio = millis();
  }
}

  //click de los botones
void mousePressed() {
  if (P == 1 && mouseX > 150 && mouseX < 250 && mouseY > 300 && mouseY < 350) {
    P = 2;
    tiempoInicio = millis();
  } else if (P == 4 && mouseX > 150 && mouseX < 250 && mouseY > 300 && mouseY < 350) {
    P = 1;
    tiempoInicio = millis();
  }
}
