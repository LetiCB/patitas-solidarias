// --- APIs --- //

// Conectar a la API de gatos y solicitar 10 urls de imágenes
fetch('https://api.thecatapi.com/v1/images/search?limit=10&mime_types=jpg,png')
      .then(response => response.json())
      .then(data => data.map(imageData => imageData.url))
      .then(data => {
        // Obtener un arreglo con 10 urls de fotos de gatos
        let fotosDeGatos = data;
        let nombreGato = ["Luna", "Milo", "Simba", "Nala", "Tigre", "Mia", "Leo", "Coco", "Bellota", "Max"];
        let provinciaGato = ["Buenos Aires", "Cordoba", "Mendoza", "San Juan", "Salta", "Corrientes", "Jujuy", "San Luis", "La Rioja", "Santa Fe"];

        // Crear un arreglo de objetos con la provincia, nombre y foto de cada gato en adopción.
        let gatosEnAdopcion = [];
        for (let i = 0; i < 10; i++) {
            let gatoEnAdopcion = {
                nombre: nombreGato[i],
                provincia: provinciaGato[i],
                foto: fotosDeGatos[i],
            };
            gatosEnAdopcion.push(gatoEnAdopcion);
        }      

           
        // Función para renderizar tarjetas con datos de animales 
        function renderizarTarjetaDeAnimales(dataDeAnimales, contenedor) {
            contenedor.innerHTML = dataDeAnimales
            .map((animal) => {
                return `
                <div class="tarjeta fondo-claro">
                    <div class="foto"><img class="efecto-imagenes" src="${animal.foto}" alt="foto de ${animal.nombre}"/></div>
                    <h3 class="nombre fuente-blanca sombra">${animal.nombre}</h3>
                    <div class="fuente-media">${animal.provincia}</div>
                    <div class="iconos-oscuros">
                        <a href="#"><i class="fas fa-map-marker-alt"></i></a>
                        <a href="#"><i class="fab fa-whatsapp"></i></a>
                        <a href="#"><i class="fa-solid fa-envelope"></i></a>
                    </div>
                </div>`;
            })
            .join(" ");
        }
        
        // Ubicar el contenedor donde se mostrarán los gatos en adopción en el DOM
        let gatosEnAdopcionDOM = document.getElementById("gatos-en-adopcion");  
        
        // Renderizar las tarjetas con los gatos en adopción
        renderizarTarjetaDeAnimales(gatosEnAdopcion, gatosEnAdopcionDOM);

      })
      .catch(error => {
        console.log(error);
      });

      

      


// Conectar a la API de perros y solicitar 10 urls de imágenes
fetch('https://dog.ceo/api/breeds/image/random/10')
      .then(response => response.json())
      .then(data => {
        // Obtener un arreglo con 10 urls de fotos de gatos
        let fotosDePerros = data.message;
        let nombrePerro = ["Cacho", "Sam", "Toto", "Fatiga", "Lola", "Nuri", "Juana", "Luna", "Brisa", "Gala"];
        let provinciaPerro = ["La Rioja", "Formosa", "Neuquen", "Santa Cruz", "Misiones", "San Juan", "Santa Fe", "Jujuy", "Mendoza", "San Luis"];

        // Crear un arreglo de objetos con la provincia, nombre y foto de cada perro en adopción.
        let perrosEnAdopcion = [];
        for (let i = 0; i < 10; i++) {
            let perroEnAdopcion = {
                nombre: nombrePerro[i],
                provincia: provinciaPerro[i],
                foto: fotosDePerros[i],
            };
            perrosEnAdopcion.push(perroEnAdopcion);
        }      

        // Función para renderizar tarjetas con datos de animales 
        function renderizarTarjetaDeAnimales(dataDeAnimales, contenedor) {
            contenedor.innerHTML = dataDeAnimales
            .map((animal) => {
                return `
                <div class="tarjeta fondo-claro">
                    <div class="foto"><img class="efecto-imagenes" src="${animal.foto}" alt="foto de ${animal.nombre}"/></div>
                    <h3 class="nombre fuente-blanca sombra">${animal.nombre}</h3>
                    <div class="fuente-media">${animal.provincia}</div>
                    <div class="iconos-oscuros">
                        <a href="#"><i class="fas fa-map-marker-alt"></i></a>
                        <a href="#"><i class="fab fa-whatsapp"></i></a>
                        <a href="#"><i class="fa-solid fa-envelope"></i></a>
                    </div>
                </div>`;
            })
            .join(" ");
        }
        
        // Ubicar el contenedor donde se mostrarán los gatos en adopción en el DOM
        let perrosEnAdopcionDOM = document.getElementById("perros-en-adopcion");
        
        // Renderizar las tarjetas con los gatos en adopción
        renderizarTarjetaDeAnimales(perrosEnAdopcion, perrosEnAdopcionDOM);

      })
      .catch(error => {
        console.log(error);
      });
