// --- APIs --- //

// Conectar a la API de gatos y solicitar 5 urls de imágenes
fetch('https://api.thecatapi.com/v1/images/search?limit=5&mime_types=jpg,png')
      .then(response => response.json())
      .then(data => data.map(imageData => imageData.url))
      .then(data => {
        // Obtener un arreglo con 10 urls de fotos de gatos
        let fotosDeGatos = data;
        let nombreGato = ["Lucy", "Lola", "Rocky", "Ted", "Tomi"];
        let provinciaGato = ["Santa Cruz", "Chubut", "Salta", "Buenos Aires", "San Juan"];

        // Crear un arreglo de objetos con provincia, nombre y foto de cada gato perdido.
        let nombreGatoPerdido = nombreGato;
        let provinciaGatoPerdido = provinciaGato;
        let fotosDeGatosPerdido = fotosDeGatos;
        let gatosPerdidos = [];
        for (let i = 0; i < provinciaGatoPerdido.length; i++) {
            let gatoPerdido = {
                nombre: nombreGatoPerdido[i],
                provincia: provinciaGatoPerdido[i],
                foto: fotosDeGatosPerdido[i],
            };
            gatosPerdidos.push(gatoPerdido);
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

        // Ubicar el contenedor donde se mostrarán los gatos perdidos en el DOM
        let gatosPerdidosDOM = document.getElementById("gatos-perdidos");     

        // Renderizar las tarjetas con los gatos perdidos
        renderizarTarjetaDeAnimales(gatosPerdidos, gatosPerdidosDOM);


      })
      .catch(error => {
        console.log(error);
      });


// Conectar a la API de perros y solicitar 6 urls de imágenes
fetch('https://dog.ceo/api/breeds/image/random/6')
      .then(response => response.json())
      .then(data => {
        // Obtener un arreglo con 6 urls de fotos de perros
        let fotosDePerros = data.message;
        let nombrePerro = ["Sultán", "Princesa", "Chano", "Cucky", "Sally", "Ariela"];
        let provinciaPerro = ["Chubut", "La Pampa", "Corrientes", "Tucuman", "Entre Rios", "La Rioja"];

        // Crear un arreglo de objetos con provincia, nombre y foto de cada perro perdido.
        let nombrePerroPerdido = nombrePerro;
        let provinciaPerroPerdido = provinciaPerro;
        let fotosDePerrosPerdido = fotosDePerros;
        let perrosPerdidos = [];
        for (let i = 0; i < provinciaPerroPerdido.length; i++) {
            let perroPerdido = {
                nombre: nombrePerroPerdido[i],
                provincia: provinciaPerroPerdido[i],
                foto: fotosDePerrosPerdido[i],
            };
            perrosPerdidos.push(perroPerdido);
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

        // Ubicar el contenedor donde se mostrarán los perros perdidos en el DOM
        let perrosPerdidosDOM = document.getElementById("perros-perdidos");     

        // Renderizar las tarjetas con los perros perdidos
        renderizarTarjetaDeAnimales(perrosPerdidos, perrosPerdidosDOM);


      })
      .catch(error => {
        console.log(error);
      });
