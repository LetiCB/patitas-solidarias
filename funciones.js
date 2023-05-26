// --- Boton para volver arriba --- //

window.addEventListener('scroll', function() {
    const botonVolverArriba = document.querySelector('.volver-arriba');
    if (window.scrollY > 300) {
        botonVolverArriba.classList.add('show');
    } else {
        botonVolverArriba.classList.remove('show');
    }
  });
  
  document.querySelector('.volver-arriba').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });



// --- Footer --- //

// Obtener el año actual
const anio = new Date().getFullYear();

// Mostrar el año actual en el footer.
document.getElementById('anio-actual').textContent = anio;