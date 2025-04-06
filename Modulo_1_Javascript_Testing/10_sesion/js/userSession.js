// Singleton para gestionar la sesión del usuario
const UserSession = (function() {
    let instancia;
  
    function crearInstancia() {
      return {
        usuario: null,
        iniciarSesion: function(usuario) {
          this.usuario = usuario;
        },
        cerrarSesion: function() {
          this.usuario = null;
        },
        getUsuario: function() {
          return this.usuario;
        }
      };
    }
  
    return {
      getInstancia: function() {
        if (!instancia) {
          instancia = crearInstancia();
        }
        return instancia;
      }
    };
  })();
  