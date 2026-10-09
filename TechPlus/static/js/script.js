// 1. Array con las rutas de las imágenes (pueden ser rutas locales como "img/foto1.jpg")
const imagenes = [
  "https://www.periconsolutions.com/wp-content/uploads/2017/08/soporte-tecnico-empresarial.jpg", // Imagen 0
  "https://www.dimensiona.com/wp-content/uploads/2021/08/photo-1534224039826-c7a0eda0e6b3-768x512.jpeg", // Imagen 1
  "https://st2.depositphotos.com/1001335/5886/i/950/depositphotos_58863235-stock-photo-electronic-technical-support-concept-spanners.jpg", // Imagen 2
  "https://livishperu.com/wp-content/uploads/2025/06/soporte-tecnico-livish.webp"  // Imagen 3
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
