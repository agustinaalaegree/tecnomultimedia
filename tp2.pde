/*
 TRABAJO PRACTICO N°2
 
 NOMBRE : ALEGRE AGUSTINA
 COMISION : N°5
 LINK AL VIDEO DE YOUTUBE :
 */

PImage imagentp2;
int x, y;
int columnas, filas, EspacioEnX, EspacioEnY;
float lado, cant;
color color1, color2;


void setup() {
  size(800, 400);  // tamaño de la pantalla
  background(234, 7, 116);  
  imagentp2 = loadImage("imagentp2.png");
  x = 0;
  y = 0;

  lado = 200;  // Longitud inicial del lado del triángulo
  cant =13;

  columnas = 2;  //repeticiones hacia el costado
  filas = 3;

  EspacioEnX = 400 / columnas;  // Espaciado horizontal entre las repeticiones
  EspacioEnY = 400 / filas+70;  // Espaciado vertical entre las repeticiones

  color1 = color(0);
  color2 = color(255);
}

void draw() {
  for (int i=0; i< columnas; i++) {
    for (int j=0; j<filas; j++) {
      int x = i * EspacioEnX;  // coordenada x del centro del triángulo
      int y = j * EspacioEnY;  // coordenada y del centro del triángulo

      figuratriangulo (x+100, y);
    }
  }
  image(imagentp2, 400, 0);
}



void figuratriangulo (int x, int y) {
  float lado = 200;  // Longitud inicial del lado del triángulo

  //ciclo for para dibujar los triángulos
  for (int triangulo = 0; triangulo < cant; triangulo++) {
    // cambio de color del triángulo
    if (triangulo % 2 == 0) {
      fill(color2);
    } else {
      fill(color1);
    }

    // dibujo del triangulo invertido
    noStroke();
    triangle(x - lado/2, y - lado/2, x + lado/2, y - lado/2, x, y + lado/2);

    // achico el tamaño del triangulo
    lado = lado * 0.85;
  }
}

void mouseMoved() {
  background(random(50, 255), 0, 0);

  columnas = 10;
  filas = 10;
  cant =random(2, 30);

  color1 = color(0, random(0, 255), 0, random(0, 255));
  color2 = color(0, 0, random(0, 255), random(0, 200));
  EspacioEnX = mouseX;
  EspacioEnY = mouseY;
  image(imagentp2, 400, 0);
}
void mouseClicked() {
  background(234, 7, 116);
  columnas = 2;
  filas = 3;
  cant =13;

  EspacioEnX = 400 / columnas;
  EspacioEnY = 400 / filas+70;

  color1 = color(0);
  color2 = color(255);
}
