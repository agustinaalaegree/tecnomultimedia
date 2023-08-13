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
  background(220);

  image(escenario[0], 0, 0);
  image(pov[1], 0, 0);
  noStroke();
  crearBotonYTexto(width / 2, height / 2, 350, 250, colorBoton, "Luego de la tragedia de Teobaldo, Romeo\nse encontraba en la habitación de su\namada.\nJulieta, quien luego de perder a su amado\nprimo también estaba a punto de perder\na Romeo, quien debe huir de Verona\npara no ser condenado por el asesinato\nde Teobaldo...", 20, miFuentetexto, color(255), 3);
}

void pantalla3 () {
  image(escenario[0], 0, 0);
  image(personaje[1], 0, 0);
  image(pov[2], 0, 0);
  image(pov[0], 0, 0);
  noStroke();
  crearBotonYTexto(width - 420, height - 400, 300, 140, colorDialogo, "JULIETA.—Quedate un poco mas,\nno tienes que irte todavia...", 18, miFuenteboton, color(255), 3);
  crearBotonYTexto(width - 240, height - 140, 300, 140, colorBoton, "(A) ROMEO.—Amada mía, los envidiosos\n rayos de luz desgarran las nubes\ndel oriente. Debo partir.  ", 18, miFuentetexto, color(255), 4);
}

void pantalla4 () {
  background(220);

  image(escenario[0], 0, 0);
  image(pov[2], 0, 0);
  image(pov[0], 0, 0);
  crearBotonYTexto(width / 2, height - 400, 400, 200, colorDialogo, "NODRIZA. —*desde el otro lado de la puerta*\n¡¡Julieta!! ¡¡Viene tu madre!!", 18, miFuenteboton, color(255), 5);
  crearBotonYTexto(width - 275, height - 180, 240, 50, colorBoton, "(A) *Quedarse en la habitación*", 18, miFuentetexto, color(255), 6);
  crearBotonYTexto(width - 210, height - 100, 370, 50, colorBoton, "(B) *Irse antes de que llegue la señora Capuleto*", 18, miFuentetexto, color(255), 5);
}

void pantalla5 () {
  background(220);

  image(escenario[0], 0, 0);
  image(personaje[1], 0, 0);
  image(pov[2], 0, 0);
  image(pov[0], 0, 0);
  crearBotonYTexto(width - 240, height - 140, 310, 140, colorBoton, "(A) ROMEO. —Un beso mas ¡adios adios!\n*da un ultimo beso a Julieta y desciende\npor el balcón para huir de su\nterrible destino...*", 18, miFuentetexto, color(255), 7);
}

//FINAL 1
void pantalla6 () {
  image(escenario[4], 0, 0);
  crearBotonYTexto(width / 2, height - 480, 500, 160, colorBoton, "*Romeo es capturado por las autoridades de Verona y es\ncondenado a muerte. Mientras tanto Julieta es obligada a casarse\n con Paris(pariente del principe.*)", 18, miFuenteboton, color(255), 1);

  // Botón
  crearBotonYTexto(width / 4, height - 100, 150, 40, colorBoton, "Volver a intentar", 16, miFuenteboton,
    color(255), 4);

  // Botón
  crearBotonYTexto(width -150, height - 100, 150, 40, colorBoton, "Inicio", 16, miFuenteboton,
    color(255), 1);
}

void pantalla7 () {
  image(escenario[0], 0, 0);
  image(personaje[2], 0, 0);
  image(pov[3], 0, 0);
  image(pov[0], 0, 0);
  crearBotonYTexto(width - 420, height - 400, 300, 140, colorDialogo, "SEÑORA CAPULETO.—Hija,\n¿Estas despierta?", 18, miFuenteboton, color(255), 7);
  crearBotonYTexto(width - 240, height - 140, 310, 140, colorBoton, "(A) JULIETA. —Si madre, no me siento bien", 18, miFuentetexto, color(255), 8);
  //hacer boton opcion A a pantalla 8
}

void pantalla8 () {
  image(escenario[0], 0, 0);
  image(personaje[2], 0, 0);
  image(pov[3], 0, 0);
  image(pov[0], 0, 0);
  crearBotonYTexto(width - 420, height - 400, 300, 140, colorDialogo, "SEÑORA CAPULETO.—Tengo alegres\nnoticias quete haran sentir mejor..", 18, miFuenteboton, color(255), 8);
  crearBotonYTexto(width - 240, height - 140, 310, 140, colorBoton, "(A) JULIETA. —¿Cuales son esas noticias?", 18, miFuentetexto, color(255), 9);
  //hacer boton opcion A a pantalla 9
}

void pantalla9 () {
  image(escenario[0], 0, 0);
  image(personaje[2], 0, 0);
  image(pov[3], 0, 0);
  image(pov[0], 0, 0);
  crearBotonYTexto(width - 420, height - 400, 340, 140, colorDialogo, "SEÑORA CAPULETO.—Tu padre, tan bueno.\nPara consolarte te preparara\nuna boda con Paris", 18, miFuenteboton, color(255), 8);
  crearBotonYTexto(width - 240, height - 140, 310, 140, colorBoton, "(A) JULIETA. —¿¡Esas son las buenas noticias!?", 18, miFuentetexto, color(255), 9);
  //hacer boton opcion A a pantalla 10
}

void pantalla10 () {
  background(220);

  image(escenario[2], 0, 0);
  image(pov[3], 0, 0);
  image(pov[0], 0, 0);
  crearBotonYTexto(width - 320, height - 400, 340, 140, colorDialogo, "Julieta pelea con sus padres, desesperada\nhuye de su casa y va hacia... \n", 18, miFuenteboton, color(255), 10);
  crearBotonYTexto(width - 210, height - 180, 370, 50, colorBoton, "(A) *ir al jardin a llorar*", 18, miFuentetexto, color(255), 6);
  crearBotonYTexto(width - 210, height - 100, 370, 50, colorBoton, "(B) *Buscar a Fray Lorenzo*", 18, miFuentetexto, color(255), 11);
}

void pantalla11 () {

  image(escenario[2], 0, 0);
  image(pov[1], 0, 0);
  crearBotonYTexto(width / 2, height / 2, 350, 250, colorBoton, "Julieta fue en busca de ayuda de\nFray Lorenzo, al cual luego de una larga\nJulieta convencio de ayudarla.\nEl plan del Fray consistia en llevar acabo la\nuna falsa muerte de Julieta, que consistia en\ntomar una posima que la haria parecer \ndormida y Romeo vendria a recatarla\na media noche cuando despertara", 20, miFuentetexto, color(255), 3);
}

void pantalla12 () {
  image(escenario[9], 0, 0);
  image(personaje[5], 0, 0);
  image(pov[3], 0, 0);
  image(pov[0], 0, 0);
  crearBotonYTexto(width - 420, height - 400, 340, 140, colorDialogo, "FRAY LORENZO.—Ve a tu casa.\nFinge alegria y sede a todo lo que\ntus padres quieran, yo\nenviare a romeo una carta con el plan..", 18, miFuenteboton, color(255), 8);
  crearBotonYTexto(width - 240, height - 140, 310, 140, colorBoton, "(A) JULIETA. —Si Fray, hasta pronto..", 18, miFuentetexto, color(255), 9);
}

void pantalla13 () {

  image(escenario[1], 0, 0);
  image(pov[1], 0, 0);
  crearBotonYTexto(width / 2, height / 2, 350, 250, colorBoton, "Al dia siguiente todo marchaba de\nacuerdo al plan, Julieta no\nfestejaba su boda sino su falso funeral.\nPor otro lado a Romeo nunca le llego la\nnoticia del plan, por lo que\nal enterarse decidio volver rapidamente a\nVerona.", 20, miFuentetexto, color(255), 3);
}

void pantalla14 () {
  image(escenario[9], 0, 0);
  image(pov[2], 0, 0);
  image(pov[0], 0, 0);
  crearBotonYTexto(width - 220, height - 140, 310, 140, colorBoton, "(A) *Romeo llego una hora antes de\nmedia noche*", 18, miFuentetexto, color(255), 9);
}

void pantalla15 () {

  image(escenario[9], 0, 0);
  image(pov[2], 0, 0);
  image(pov[0], 0, 0);
  crearBotonYTexto(width - 210, height - 180, 370, 50, colorBoton, "(A) *ir al mausoleo a ver a Julieta*", 18, miFuentetexto, color(255), 6);
  crearBotonYTexto(width - 210, height - 100, 370, 50, colorBoton, "(B) *Buscar al Fray para saber de\nla muerte de su amada*", 18, miFuentetexto, color(255), 11);
}

void pantalla16 () {
  image(escenario[3], 0, 0);
  image(pov[1], 0, 0);
  crearBotonYTexto(width / 2, height / 2, 350, 250, colorBoton, "Romeo, engañado por la falsa muerte\n de Julieta, decide morir en su tumba.\nAl despertar Julieta y\nencontrarlo muerto, se apuñala\ncon la daga de Romeo.\nSus muertes impulsan a sus familias\nenemistadas a reconciliarse", 20, miFuentetexto, color(255), 3);
  // Botón Inicio
  crearBotonYTexto(width / 2, height - 150, 150, 40, colorDialogo, "Inicio", 16, miFuenteboton, color(255), 1);
}

void pantalla17 () {
  image(escenario[0], 0, 0);
  image(pov[1], 0, 0);
  crearBotonYTexto(width / 2, height / 2, 350, 250, colorBoton, "Romeo se entera del plan y\njunto a Julieta, espacan de Verona.\nGracias a Fray Lorenzo\nlos jovenes pudieron tener su final feliz,\n tristemente, lejos de sus familias... ", 20, miFuentetexto, color(255), 3);
  // Botón Inicio
  crearBotonYTexto(width / 2, height - 150, 150, 40, colorDialogo, "Inicio", 16, miFuenteboton, color(255), 1);
}


void creditos() {
  image(escenario[8], 0, 0);
  image(pov[1], 0, 0);

  crearBotonYTexto(width / 2, height / 2, 350, 250, colorBoton, "CREDITOS\nTPN°3 tecno multimedia 2023\n\nalumna/o .... Agustina Alegre\nilustraciones .... Sealah illust (ig)\ncomision .... N°5\nprofesor .... Tobias Albirosa", 20, miFuentetexto, color(255), 1);

  // Botón Inicio
  crearBotonYTexto(width / 2, height - 150, 150, 40, colorDialogo, "Inicio", 16, miFuenteboton, color(255), 1);
}
