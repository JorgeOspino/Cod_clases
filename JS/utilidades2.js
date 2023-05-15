var contenedor = document.getElementById("contenedor-imagenes");

var imagenes = [
  "../Recursos/Imagenes/CR7.jpg",
  "../Recursos/Imagenes/CR7.jpg",
  
];


for (var i = 0; i < imagenes.length; i++) {
  var divImagen = document.createElement("div");
  divImagen.className = "imagen";
  divImagen.style.backgroundImage = "url('" + imagenes[i] + "')";
  contenedor.appendChild(divImagen);
}

var contenedor2 = document.getElementById("contenedor-imagenes2");

var imagenes2 = [
    "../Recursos/Imagenes/mar_96.webp",


];

for (var z = 0; z < imagenes2.length; z++) {
    var divImagen2 = document.createElement("div");
    divImagen2.className = "img";
    divImagen2.style.backgroundImage = "url('"+imagenes2[z]+"')";
    contenedor2.appendChild(divImagen2);
    
}
