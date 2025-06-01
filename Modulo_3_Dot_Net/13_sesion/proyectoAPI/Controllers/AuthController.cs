using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace proyectoAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IConfiguration _config;

        public AuthController(IConfiguration config)
        {
            _config = config;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Username) || string.IsNullOrWhiteSpace(request.Password))
                return BadRequest("Usuario y contraseña son obligatorios");

            var connectionString = _config.GetConnectionString("DefaultConnection");

            using var connection = new SqlConnection(connectionString);
            connection.Open();

            var query = "SELECT Id, UserName, PassHash FROM Users WHERE Username = @username";
            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@username", request.Username);

            using var reader = command.ExecuteReader();

            if (!reader.Read())
                return Unauthorized("Credenciales inválidas");

            var id = reader.GetInt32(0);
            var username = reader.GetString(1);
            var passwordHash = reader.GetString(2);

            // Verificar contraseña
            if (!BCrypt.Net.BCrypt.Verify(request.Password, passwordHash))
                return Unauthorized("Credenciales inválidas");

            // Crear token JWT
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.Name, username),
                new Claim(ClaimTypes.NameIdentifier, id.ToString())
            };

            var token = new JwtSecurityToken(
                expires: DateTime.UtcNow.AddHours(2),
                claims: claims,
                signingCredentials: creds);

            var tokenString = new JwtSecurityTokenHandler().WriteToken(token);

            return Ok(new
            {
                token = tokenString,
                expires = token.ValidTo
            });
        }



        [HttpPost("register")]
        public IActionResult Register([FromBody] LoginRequest request)
        {
            var connectionString = _config.GetConnectionString("DefaultConnection");

            using var connection = new SqlConnection(connectionString);
            connection.Open();

            // Validar si el usuario ya existe
            var checkQuery = "SELECT COUNT(*) FROM Users WHERE UserName = @username";
            using (var checkCommand = new SqlCommand(checkQuery, connection))
            {
                checkCommand.Parameters.AddWithValue("@username", request.Username);
                int userCount = (int)checkCommand.ExecuteScalar();
                if (userCount > 0)
                {
                    return Conflict("El nombre de usuario ya está en uso");
                }
            }

            // Hashear la contraseña
            var passwordHash = BCrypt.Net.BCrypt.HashPassword(request.Password);

            var query = "INSERT INTO Users (UserName, PassHash) VALUES (@username, @password)";
            using var command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@username", request.Username);
            command.Parameters.AddWithValue("@password", passwordHash);

            var result = command.ExecuteNonQuery();

            return Ok("Usuario registrado con éxito");
        }


    }

    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
