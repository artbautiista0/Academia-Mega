const emailService = require('./emailService');
const { notificarUsuario } = require('./notify');

jest.mock('./emailService');

test('debe llamar a enviarCorreo una vez', () => {
  const usuario = { email: 'test@correo.com' };
  notificarUsuario(usuario);

  expect(emailService.enviarCorreo).toHaveBeenCalledTimes(1);
  expect(emailService.enviarCorreo).toHaveBeenCalledWith('test@correo.com', '¡Hola!');
});
