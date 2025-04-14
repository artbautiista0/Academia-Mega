const emailService = require('./emailService');

function notificarUsuario(usuario) {
  return emailService.enviarCorreo(usuario.email, '¡Hola!');
}

module.exports = { notificarUsuario };
