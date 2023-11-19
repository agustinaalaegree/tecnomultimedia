class EstadoJugando {

  constructor(juego, tiempoLimite) {
    this.juego = juego;
    this.tiempoRestante = tiempoLimite; // Utiliza la variable proporcionada
    this.tiempoDecremento = 1000; // Nueva variable para definir la cantidad a restar
    this.botonReiniciar = new BotonReiniciar(250, 400, 100, 40, "Reiniciar");
    this.estado = loadImage('estado.jpg');
    this.fondo = loadImage('mapa.png');
    this.romeo = loadImage('romeo.png');
  }


  mostrar() {
    image(this.fondo, 0, 0, width, height);

    image(this.romeo, 180, this.juego.cuadradoY, 105, 105);
    fill(360);
    textSize(20);
    text('Clicks: ' + this.juego.clicks, 10, 30);
    text('Tiempo: ' + this.tiempoRestante + 's', 10, 60);



    if (this.juego.cuadradoY <= 45 ) {
      this.mostrarMensajeGanaste();
      this.botonReiniciar.mostrar(); // Muestra el botón al ganar
    } else if (this.tiempoRestante <= 0) {
      this.mostrarMensajePerdiste();
      this.botonReiniciar.mostrar(); // Muestra el botón al ganar
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
    text('¡Perdiste!', width / 2 - 100, height / 2);
  }

  mostrarMensajeGanaste() {
    image(this.estado, 0, 0, width, height);
    fill(0, 255, 0); // Establece el color del texto a verde
    textSize(40);
    text('¡Ganaste!', width / 2 - 100, height / 2);
  }

  mousePressed() {
    this.juego.cuadradoY -= this.juego.velocidadY;
    this.juego.clicks++;
  }
}
