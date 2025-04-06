// Eventos de la interfaz
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const result = AuthModule.login(username, password);
    const messageDiv = document.getElementById('message');
  
    if (result.success) {
      messageDiv.textContent = result.message;
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('logoutButton').style.display = 'block';
    } else {
      messageDiv.textContent = result.message;
    }
  });
  
  document.getElementById('logoutButton').addEventListener('click', function() {
    const result = AuthModule.logout();
    document.getElementById('message').textContent = result.message;
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('logoutButton').style.display = 'none';
    document.getElementById('loginForm').reset();
  });
  