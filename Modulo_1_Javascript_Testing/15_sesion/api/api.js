async function getUser() {
    // Simulación de API 
    return Promise.resolve({ id: 1, name: 'Ana' });
  }
  
  module.exports = { getUser };
  