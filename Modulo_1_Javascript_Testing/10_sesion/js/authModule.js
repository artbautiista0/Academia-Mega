// Módulo de autenticación que simula un logueo
const AuthModule = (function() {
    // Simulamos una "base de datos" de usuarios
    const usuariosDB = [
      { username: 'usuario1', password: '1234' },
      { username: 'admin', password: 'admin' }
    ];
  
    // Obtenemos la instancia única de la sesión del usuario
    const userSession = UserSession.getInstancia();
  
    // Función para realizar el logueo
    function login(username, password) {
      const usuarioEncontrado = usuariosDB.find(u => u.username === username && u.password === password);
      if (usuarioEncontrado) {
        userSession.iniciarSesion(usuarioEncontrado);
        return { success: true, message: `Bienvenido ${usuarioEncontrado.username}` };
      } else {
        return { success: false, message: 'Credenciales inválidas' };
      }
    }
  
    // Función para cerrar sesión
    function logout() {
      const usuarioActual = userSession.getUsuario();
      if (usuarioActual) {
        userSession.cerrarSesion();
        return { success: true, message: `Hasta luego ${usuarioActual.username}` };
      } else {
        return { success: false, message: 'No hay sesión activa' };
      }
    }
  
    // Función para obtener el usuario autenticado actualmente
    function getSessionUser() {
      return userSession.getUsuario();
    }
  
    return {
      login: login,
      logout: logout,
      getSessionUser: getSessionUser
    };
  })();
  