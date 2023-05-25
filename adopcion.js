// --- APIs --- //

// Conectar a la API de gatos y solicitar 10 urls de imágenes
fetch('https://api.thecatapi.com/v1/images/search?limit=10&mime_types=jpg,png')
      .then(response => response.json())
      .then(data => data.map(imageData => imageData.url))
      .then(data => {
        // Obtener un arreglo con 10 urls de fotos de gatos
        let fotosDeGatos = data;
        let nombreGato = ["Luna", "Milo", "Simba", "Nala", "Tigre", "Mia", "Leo", "Coco", "Bellota", "Max"];
        let telGato = ["+54 444 45678", "+54 234 56789", "+54 345 67890", "+54 456 78901", "+54 567 89012", "+54 677 90123", "+54 789 01234", "+54 890 12345", "+54 901 23456", "+54 012 34567"];

        // Crear un arreglo de objetos con el teléfono de contacto, nombre y foto de cada gato en adopción.
        let gatosEnAdopcion = [];
        for (let i = 0; i < 10; i++) {
            let gatoEnAdopcion = {
                nombre: nombreGato[i],
                telefono: telGato[i],
                foto: fotosDeGatos[i],
            };
            gatosEnAdopcion.push(gatoEnAdopcion);
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
        let telPerro = ["+54 123 45678", "+54 234 56789", "+54 345 67890", "+54 456 78901", "+54 567 89012", "+54 677 90123", "+54 789 01234", "+54 890 12345", "+54 901 23456", "+54 012 34567"];

        // Crear un arreglo de objetos con el teléfono de contacto, nombre y foto de cada perro en adopción.
        let perrosEnAdopcion = [];
        for (let i = 0; i < 10; i++) {
            let perroEnAdopcion = {
                nombre: nombrePerro[i],
                telefono: telPerro[i],
                foto: fotosDePerros[i],
            };
            perrosEnAdopcion.push(perroEnAdopcion);
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
        
        // Ubicar el contenedor donde se mostrarán los gatos en adopción en el DOM
        let perrosEnAdopcionDOM = document.getElementById("perros-en-adopcion");
        
        // Renderizar las tarjetas con los gatos en adopción
        renderizarTarjetaDeAnimales(perrosEnAdopcion, perrosEnAdopcionDOM);

      })
      .catch(error => {
        console.log(error);
      });
