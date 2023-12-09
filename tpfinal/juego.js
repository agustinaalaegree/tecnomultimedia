class Juego {

  constructor() {
    this.ID = 1;
    this.escenario = [];
    this.personaje = [];
    this.pov = [];
    this.botonComenzar = new BotonConTexto(300, 475, 100, 50, 'Comenzar', 16, 2);
    this.botonCreditos = new BotonConTexto(300, 550, 100, 50, 'Créditos', 16, 18);
    this.botonSiguiente = new BotonConTexto(500, 550, 100, 50, 'Siguiente');
    this.botonInicio = new BotonConTexto(100, 50, 100, 50, 'Inicio', 16, 1);
    this.botonVolver = new BotonConTexto(500, 50, 100, 50, 'Volver', 16, 4);
    this.botonA = new BotonConTexto(222, 420, 40, 40, 'A', 16);
    this.botonB = new BotonConTexto(222, 500, 40, 40, 'B', 16);
    this.juegoRomeoYJulieta = new miniJuego();
  }

  preload() {



    //botones
    this.botonComenzar.preload();
    this.botonCreditos.preload();
    this.botonSiguiente.preload();
    this.botonInicio.preload();
    this.botonVolver.preload();
    this.botonA.preload();
    this.botonB.preload();


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
  }

  setup() {
    createCanvas(600, 600);
    background(0);
    cursor(HAND);
    this.juegoRomeoYJulieta.setup();
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
      image(this.escenario[6], 0, 0);
      image(this.pov[1], 0, 0);
      this.botonSiguiente.draw();

      fill(0);
      textSize(20);
      text('\nLuego de la tragedia, Romeo se\nencontraba a punto de subir a la habitación ', width / 2, 200);
      text('\nde Julieta, quien luego de perder a su\n primo, tambien estaba a punto de perderlo', width / 2, 250);
      text('\na él. Su amado, quien debe huir\n de Verona para no ser condenado', width / 2, 300);
      text('\npor el asesinato de\nTeobaldo...', width / 2, 350);
    } else if (this.ID=== 3) {
      image(this.escenario[0], 0, 0);
      image(this.personaje[1], 0, 0);
      image(this.pov[2], 0, 0);
      image(this.pov[0], 0, 0);
      this.botonA.draw();
      this.botonInicio.draw();


      fill(158, 143, 98);
      rect(180, 200, 300, 150);
      textSize(18);
      fill(0);

      text('\nJULIETA.—Quedate un poco mas,\nno tienes que irte todavia...', 180, 200);

      text('\nROMEO.—Amada mía, los envidiosos\n rayos de luz desgarran las nubes', 400, 420);
      text ('\ndel oriente. Debo partir.', 400, 455);
    } else if (this.ID=== 4) {
      image(this.escenario[0], 0, 0);
      image(this.personaje[1], 0, 0);
      image(this.pov[2], 0, 0);
      image(this.pov[0], 0, 0);
      this.botonInicio.draw();
      this.botonA.draw();
      this.botonB.draw();


      fill(158, 143, 98);
      rect(180, 200, 350, 150);
      textSize(18);
      fill(0);

      text('\nNODRIZA. —*desde el otro lado de la\npuerta* ¡¡Julieta!! ¡¡Viene tu madre!!', 180, 200);

      text('*Quedarse en la habitación*', 400, 420);
      text('\n*Irse antes de que llegue la\nseñora Capuleto*', 400, 500);
    } else if (this.ID=== 5) {
      image(this.escenario[0], 0, 0);
      image(this.personaje[1], 0, 0);
      image(this.pov[2], 0, 0);
      image(this.pov[0], 0, 0);
      this.botonInicio.draw();
      this.botonA.draw();

      textSize(18);
      fill(0);
      text('\nROMEO. —Un beso mas ¡adios adios!\n*da un ultimo beso a Julieta y desciende', 410, 420);
      text ('\npor el balcón para huir de su\nterrible destino...*', 410, 465);
    } else if (this.ID=== 6) {   //final 1
      image(this.escenario[4], 0, 0);

      fill(158, 143, 98);

      rect(300, 250, 530, 150);
      fill(0);
      textSize(20);
      text('\n*Romeo es capturado por las autoridades de Verona y es\ncondenado a muerte.', width / 2, 200);
      text('\n Mientras tanto Julieta es obligada a casarse\n con Paris(pariente del principe).*', width / 2, 250);
      this.botonInicio.draw();
      this.botonVolver.draw();
    } else if (this.ID=== 7) {
      image(this.escenario[0], 0, 0);
      image(this.personaje[2], 0, 0);
      image(this.pov[3], 0, 0);
      image(this.pov[0], 0, 0);
      this.botonInicio.draw();
      this.botonA.draw();

      fill(158, 143, 98);
      rect(180, 200, 350, 150);
      textSize(18);
      fill(0);

      text('\nSEÑORA CAPULETO.—Hija\n¿Estas despierta?', 180, 200);

      text('JULIETA. —Si madre, no me siento bien', 410, 420);
    } else if (this.ID=== 8) {
      image(this.escenario[0], 0, 0);
      image(this.personaje[2], 0, 0);
      image(this.pov[3], 0, 0);
      image(this.pov[0], 0, 0);
      this.botonInicio.draw();
      this.botonA.draw();

      fill(158, 143, 98);
      rect(180, 200, 350, 150);
      textSize(18);
      fill(0);

      text('\nSEÑORA CAPULETO.—Tengo alegres\nnoticias quete haran sentir mejor.', 180, 200);

      text('JULIETA. —¿Cuales son esas noticias?', 420, 420);
    } else if (this.ID=== 9) {
      image(this.escenario[0], 0, 0);
      image(this.personaje[2], 0, 0);
      image(this.pov[3], 0, 0);
      image(this.pov[0], 0, 0);
      this.botonInicio.draw();
      this.botonA.draw();


      fill(158, 143, 98);
      rect(180, 200, 350, 150);
      textSize(18);
      fill(0);

      text('\nSEÑORA CAPULETO.—Tu padre, tan bueno.\nPara consolarte te preparara\nuna boda con Paris', 180, 200);

      text('\nJULIETA. —¿¡Esas son las\nbuenas noticias!?', 410, 420);
    } else if (this.ID=== 10) {
      image(this.escenario[2], 0, 0);
      image(this.pov[3], 0, 0);
      image(this.pov[0], 0, 0);
      this.botonInicio.draw();
      this.botonA.draw();
      this.botonB.draw();

      fill(158, 143, 98);
      rect(180, 200, 350, 150);
      textSize(18);
      fill(0);

      text('\nJulieta pelea con sus padres, desesperada\nhuye de su casa y va hacia...', 180, 200);

      text('*Ir al jardin a llorar*', 400, 420);
      text('*Buscar a Fray Lorenzo*', 400, 500);
    } else if (this.ID=== 11) {
      image(this.escenario[2], 0, 0);
      image(this.pov[1], 0, 0);
      this.botonA.draw();

      fill(0);
      textSize(20);
      text('\nJulieta fue en busca de ayuda de\nFray Lorenzo, al cual luego de una larga', width / 2, 200);
      text('\nJulieta convencio de ayudarla.\nEl plan del Fray consistia en llevar acabo la', width / 2, 250);
      text('\nuna falsa muerte de Julieta, que consistia en\ntomar una posima que la haria parecer', width / 2, 300);
      text(' \ndormida y Romeo vendria a recatarla\na media noche cuando despertara', width / 2, 350);
    } else if (this.ID=== 12) {
      image(this.escenario[7], 0, 0);
      image(this.personaje[5], 0, 0);
      image(this.pov[3], 0, 0);
      image(this.pov[0], 0, 0);
      this.botonInicio.draw();
      this.botonA.draw();

      fill(158, 143, 98);
      rect(180, 200, 350, 150);
      textSize(18);
      fill(0);

      text('\nFRAY LORENZO.—Ve a tu casa.Finge alegria y sede a todo lo que\ntus padres quieran, yo', 180, 200);
      text('\nenviare a romeo una carta con el plan...', 180, 250);

      text('JULIETA. —Si Fray, hasta pronto..', 410, 420);
    } else if (this.ID=== 13) {
      image(this.escenario[1], 0, 0);
      image(this.pov[1], 0, 0);
      this.botonA.draw();

      fill(0);
      textSize(20);
      text('\n Al dia siguiente todo marchaba de\nacuerdo al plan, Julieta no', width / 2, 200);
      text('\nfestejaba su boda sino su falso funeral.', width / 2, 250);
      text('\nPor otro lado a Romeo nunca le llego la\nnoticia del plan, por lo que', width / 2, 300);
      text('\nal enterarse decidio volver rapidamente a\nVerona.', width / 2, 350);
    } else if (this.ID=== 14) {
      image(this.escenario[7], 0, 0);
      image(this.pov[2], 0, 0);
      image(this.pov[0], 0, 0);
      this.botonA.draw();
      this.botonInicio.draw();



      textSize(18);
      fill(0);

      text('\n*Romeo llega una hora antes\nde media noche*', 410, 420);
    } else if (this.ID=== 15) {
      image(this.escenario[7], 0, 0);
      image(this.pov[2], 0, 0);
      image(this.pov[0], 0, 0);
      this.botonInicio.draw();
      this.botonA.draw();
      this.botonB.draw();

      textSize(18);
      fill(0);


      text('*ir al mausoleo a ver a Julieta*', 400, 420);
      text('\n*Buscar al Fray para saber de\nla muerte de su amada*', 400, 500);
    } else if (this.ID=== 16) {
      image(this.escenario[3], 0, 0);
      image(this.pov[1], 0, 0);
      this.botonInicio.draw();


      fill(0);
      textSize(20);
      text('\nRomeo, engañado por la falsa muerte\n de Julieta, decide morir en su tumba.', width / 2, 200);
      text('\nAl despertar Julieta y\nencontrarlo muerto,', width / 2, 250);
      text('\nse apuñala\ncon la daga de Romeo.', width / 2, 300);
      text('\nSus muertes impulsan a sus familias\nenemistadas a reconciliarse', width / 2, 350);
    } else if (this.ID=== 17) {
      image(this.escenario[0], 0, 0);
      image(this.pov[1], 0, 0);
      this.botonInicio.draw();

      fill(0);
      textSize(20);
      text('\nRomeo se entera del plan y\njunto a Julieta, espacan de Verona.', width / 2, 200);
      text('\nGracias a Fray Lorenzo\nlos jovenes pudieron tener su final feliz,', width / 2, 250);
      text('\ntristemente, lejos de sus familias...', width / 2, 300);
    } else if (this.ID=== 18) {

      image(this.escenario[6], 0, 0);
      image(this.pov[1], 0, 0);
      this.botonInicio.draw();
      fill(0);
      textSize(20);
      text('\nCREDITOS\nTP Final tecno multimedia 2023', width / 2, 180);
      text('alumna/o .... Agustina Alegre', width / 2, 250);
      text('comision .... N°5', width / 2, 300);
      text('profesor .... Tobias Albirosa', width / 2, 350);
    } else if (this.ID=== 19) {
      if (this.ID ) {
      }
      this.juegoRomeoYJulieta.draw();
    }
  }

  mousePressed() {
    this.botonComenzar.mousePressed();
    this.botonCreditos.mousePressed();
    this.botonSiguiente.mousePressed();
    this.botonInicio.mousePressed();
    this.botonVolver.mousePressed();
    this.botonA.mousePressed();
    this.botonB.mousePressed();
    if (this.ID === 19) {
      this.juegoRomeoYJulieta.mousePressed();
    }
  }
}
