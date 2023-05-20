// --- APIs --- //
// Obtener un arreglo con 10 urls de fotos de gatos
async function obtenerFotosDeGatos() {
    try {
      let response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
      let data = await response.json();
      let gatosUrls = data.map(imageData => imageData.url);
      return gatosUrls;
    } catch (error) {
      console.log(error);
    }
  }
  
let fotosDeGatos = obtenerFotosDeGatos();
console.log(fotosDeGatos);



// --- Footer --- //

// Obtener el año actual
const anio = new Date().getFullYear();

// Mostrar el año actual en el footer.
document.getElementById('anio-actual').textContent = anio;