class EstadoJugando {

  constructor(minijuego, tiempoLimite) {
    this.minijuego = minijuego;
    this.tiempoRestante = tiempoLimite; // Utiliza la variable proporcionada
    this.tiempoDecremento = 1000; // Nueva variable para definir la cantidad a restar
    this.estado = loadImage('estado.jpg');
    this.fondo = loadImage('mapa.png');
    this.romeo = loadImage('miniromeo.png');
    this.botonInicio = new BotonConTexto(100, 50, 100, 50, 'Inicio', 16, 1);
    this.botonSiguiente = new BotonConTexto(500, 550, 100, 50, 'Siguiente', 16);
  }


  mostrar() {
    this.botonInicio.preload();
    this.botonSiguiente.preload();

    image(this.fondo, 0, 0, width, height);

    image(this.romeo, 180, this.minijuego.cuadradoY, 105, 105);
    fill(360);
    textSize(20);
    text('Clicks: ' + this.minijuego.clicks, 10, 30);
    text('Tiempo: ' + this.tiempoRestante + 's', 10, 60);



    if (this.minijuego.cuadradoY <= 45 ) {
      this.mostrarMensajeGanaste();
      this.botonInicio.draw();
      this.botonSiguiente.draw();
    } else if (this.tiempoRestante <= 0) {
      this.mostrarMensajePerdiste();
      this.botonInicio.draw();
    }

    // Actualiza el tiempo
    if (frameCount % 60 == 0 && this.tiempoRestante > 0) {
      this.tiempoRestante -= this.tiempoDecremento; // Resta de a 1000 en lugar de 1
    }
  }

  mostrarMensajePerdiste() {
    image(this.estado, 0, 0, width, height);
    fill(255, 0, 0); // Establece el color del texto a rojo
    textSize(40);
    text('¡Perdiste!', 300, 300);
  }

  mostrarMensajeGanaste() {
    image(this.estado, 0, 0, width, height);
    fill(0, 255, 0); // Establece el color del texto a verde
    textSize(40);
    text('¡Ganaste!', 300, 300);
  }

  mousePressed() {
    this.minijuego.cuadradoY -= this.minijuego.velocidadY;
    this.minijuego.clicks++;
    this.botonInicio.mousePressed();
  }
}
