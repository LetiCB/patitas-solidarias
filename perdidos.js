// --- APIs --- //

// Conectar a la API de gatos y solicitar 5 urls de imágenes
fetch('https://api.thecatapi.com/v1/images/search?limit=5')
      .then(response => response.json())
      .then(data => data.map(imageData => imageData.url))
      .then(data => {
        // Obtener un arreglo con 10 urls de fotos de gatos
        let fotosDeGatos = data;
        let nombreGato = ["Lucy", "Lola", "Rocky", "Ted", "Tomi"];
        let telGato = ["+54 123 45678", "+54 234 56789", "+54 345 67890", "+54 456 78901", "+54 567 89012"];

        // Crear un arreglo de objetos con el teléfono de contacto, nombre y foto de cada gato perdido.
        let nombreGatoPerdido = nombreGato;
        let telGatoPerdido = telGato;
        let fotosDeGatosPerdido = fotosDeGatos;
        let gatosPerdidos = [];
        for (let i = 0; i < telGatoPerdido.length; i++) {
            let gatoPerdido = {
                nombre: nombreGatoPerdido[i],
                telefono: telGatoPerdido[i],
                foto: fotosDeGatosPerdido[i],
            };
            gatosPerdidos.push(gatoPerdido);
        }
           
        // Función para renderizar tarjetas con datos de animales 
        function renderizarTarjetaDeAnimales(dataDeAnimales, contenedor) {
            contenedor.innerHTML = dataDeAnimales
            .map((animal) => {
                return `
                <div class="tarjeta">
                    <div class="foto"><img src="${animal.foto}" alt="foto de ${animal.nombre}"/></div>
                    <div class="nombre">${animal.nombre}</div>
                    <div class="telefono">${animal.telefono}</div>
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
        let telPerro = ["+54 345 67890", "+54 456 78901", "+54 567 89012", "+54 677 90123", "+54 789 01234", "+54 890 12345"];

        // Crear un arreglo de objetos con el teléfono de contacto, nombre y foto de cada perro perdido.
        let nombrePerroPerdido = nombrePerro;
        let telPerroPerdido = telPerro;
        let fotosDePerrosPerdido = fotosDePerros;
        let perrosPerdidos = [];
        for (let i = 0; i < telPerroPerdido.length; i++) {
            let perroPerdido = {
                nombre: nombrePerroPerdido[i],
                telefono: telPerroPerdido[i],
                foto: fotosDePerrosPerdido[i],
            };
            perrosPerdidos.push(perroPerdido);
        }
           
        // Función para renderizar tarjetas con datos de animales 
        function renderizarTarjetaDeAnimales(dataDeAnimales, contenedor) {
            contenedor.innerHTML = dataDeAnimales
            .map((animal) => {
                return `
                <div class="tarjeta">
                    <div class="foto"><img src="${animal.foto}" alt="foto de ${animal.nombre}"/></div>
                    <div class="nombre">${animal.nombre}</div>
                    <div class="telefono">${animal.telefono}</div>
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
