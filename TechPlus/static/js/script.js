// 1. Array con las rutas de las imágenes (pueden ser rutas locales como "img/foto1.jpg")
const imagenes = [
  "https://picsum.photos/id/1018/600/400", // Imagen 0
  "https://picsum.photos/id/1015/600/400", // Imagen 1
  "https://picsum.photos/id/1019/600/400", // Imagen 2
  "https://picsum.photos/id/1016/600/400"  // Imagen 3
];

// 2. Variable para saber en qué imagen estamos (empezamos en la primera)
let indiceActual = 0;

// 3. La función que mueve el carrusel
function cambiarImagen(direccion) {
  // Sumamos o restamos dependiendo del botón que se hizo clic
  indiceActual = indiceActual + direccion;

  // Si nos pasamos de la última imagen, volvemos al principio (0)
  if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  } 
  // Si retrocedemos antes de la primera imagen, vamos a la última
  else if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  }

  // Capturamos la etiqueta <img id="imagen-carrusel"> y le cambiamos su atributo 'src'
  document.getElementById("imagen-carrusel").src = imagenes[indiceActual];
}
