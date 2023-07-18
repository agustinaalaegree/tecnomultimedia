void inicio() {
  background(220);
  image(escenario[7], 0, 0);

  // Botón
  crearBotonYTexto(width / 2, height - 100, 150, 40, colorBoton, "Comenzar", 16, miFuenteboton,
    color(255), 2);

  // Botón
  crearBotonYTexto(width / 2, height - 50, 150, 40, colorBoton, "Créditos", 16, miFuenteboton,
    color(255), 12);
}

void pantalla2() {
  image(escenario[0], 0, 0);
  image(pov[1], 0, 0);
  noStroke();
  crearBotonYTexto(width / 2, height / 2, 350, 250, colorBoton, "Luego de la tragedia de Teobaldo, Romeo\nse encontraba en la habitación de su\namada.\nJulieta, quien luego de perder a su amado\nprimo también estaba a punto de perder\na Romeo, quien debe huir de Verona\npara no ser condenado por el asesinato\nde Teobaldo...", 20, miFuentetexto, color(255), 3);
}

void pantalla3 () {
  image(escenario[0], 0, 0);
  image(personaje[0], 0, 0);
  image(pov[3], 0, 0);
  image(pov[0], 0, 0);
}

void creditos() {
  image(escenario[8], 0, 0);
  image(pov[1], 0, 0);
  noStroke();
  crearBotonYTexto(width / 2, height / 2, 350, 250, colorBoton, "CREDITOS\nTPN°3 tecno multimedia 2023\n\nalumna/o .... Agustina Alegre\nilustraciones .... Sealah illust (ig)\ncomision .... N°5\nprofesor .... Tobias Albirosa", 20, miFuentetexto, color(255), 1);



  // Botón Inicio
  strokeWeight(1);
  crearBotonYTexto(width / 2, height - 50, 150, 40, colorBoton, "Inicio", 16, miFuenteboton,
    color(255), 1);
}
