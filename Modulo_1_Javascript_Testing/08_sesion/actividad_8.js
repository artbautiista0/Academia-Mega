// Función para obtener todos los personajes recorriendo todas las páginas de la API
async function fetchAllCharacters() {
    let url = 'https://rickandmortyapi.com/api/character';
    const allCharacters = [];
  
    while (url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error en la respuesta de la red');
        }
        const data = await response.json();
        allCharacters.push(...data.results);
        url = data.info.next; // Si no hay más páginas, url se volverá null y se terminará el bucle
        //console.log(data.results);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        break;
      }
    }
    return allCharacters;
  }
  
  // Función para crear una tarjeta HTML con la información de un personaje
  function createCharacterCard(character) {
    const card = document.createElement('div');
    card.classList.add('character-card');
  
    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
      <p><strong>Especie:</strong> ${character.species}</p>
      <p><strong>Estado:</strong> ${character.status}</p>
      <p><strong>Género:</strong> ${character.gender}</p>
      <p><strong>Origen:</strong> ${character.origin.name}</p>
    `;
    
    return card;
  }
  
  // Función para mostrar en el HTML todos los personajes obtenidos de la API
  async function displayCharacters() {
    const container = document.getElementById('characters-container');
    try {
      const characters = await fetchAllCharacters();
      characters.forEach(character => {
        const card = createCharacterCard(character);
        container.appendChild(card);
      });
    } catch (error) {
      console.error('Error al mostrar los personajes:', error);
    }
  }
  
  // Ejecutamos la función para obtener y renderizar los personajes
  displayCharacters();
  