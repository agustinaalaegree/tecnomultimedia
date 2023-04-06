//TP0 - Agustina Alegre
//Herramienta = Serrucho


int fondo = 255;
color mango = color ( 152, 124, 91);
color metal = color ( 165, 157, 157);
color tornillos = color ( 201, 196, 168);
PImage herramienta;


void setup() {
  size(1200, 400);
  background(fondo);
  herramienta = loadImage("herramienta.jpg");
}


void draw() {

  //imagen del serrucho
  image(herramienta, 610, 30);

  //cuerpo de la herramienta
  fill(metal);
  quad(50, 130, 400, 130, 400, 252, 40, 170);
  fill (fondo);
  noStroke();
  ellipse(70, 150, 20, 15);

  //mango de la herramienta
  fill(mango);
  quad(340, 125, 480, 120, 480, 230, 380, 220);

  fill(metal);
  ellipse(355, 175, 40, 40);
  ellipse(370, 210, 40, 40);

  //agarre del mango
  fill (fondo);
  ellipse(440, 175, 30, 60);

  //tornillos
  fill (tornillos);
  ellipse(380, 150, 10, 10);
  ellipse(395, 180, 10, 10);
  ellipse(400, 210, 10, 10);

  //puntas del mango
  fill(mango);
  quad(480, 120, 500, 120, 500, 140, 480, 160);
  quad(480, 230, 500, 230, 500, 210, 480, 190);

  fill(fondo);
  ellipse(490, 175, 30, 40);
}
