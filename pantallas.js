function inicio(){

    image(inicioImage, 0, 0, 600, 600);
    fill(255);
    boton("Jugar", width / 2, height -100 - 25, 150, 50, 1);
    boton("Créditos", width / 2, height - 100 + 50, 150, 50, 2);
}



function creditos(){
    fill(255);
    text("Créditos", width / 2, 200);
   // textFont(textos); // Establece la fuente personalizada
    text("Tecno Multimedia 1 - 2023", width / 2, height- 350);
    text("Docente: Tobias Albirosa", width / 2, height - 300);
    text("TP N°4", width / 2, height-250);
    text("Comision N°5", width / 2, height-200);
    text("Alumno/a: Agustina Alegre 88166/0", width / 2, height -150);
    boton("Inicio", width / 2, height - 550 + 50, 150, 50, 0);

}
