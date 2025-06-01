using proyectoMVC.Models;
using System.Net.Http.Json;
namespace proyectoMVC.Services
{

    public class AuthService : IAuthService
    {
        private readonly HttpClient _httpClient;

        public AuthService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<LoginResponse?> LoginAsync(string username, string password)
        {
            var loginRequest = new
            {
                username,
                password
            };

            var response = await _httpClient.PostAsJsonAsync("api/Auth/login", loginRequest);

            if (!response.IsSuccessStatusCode)
                return null;

            return await response.Content.ReadFromJsonAsync<LoginResponse>();
        }

        public async Task<string?> RegisterAsync(Login login)
        {
            var registerRequest = new
            {
                username = login.User,
                password = login.Pass
            };

            var response = await _httpClient.PostAsJsonAsync("api/Auth/register", registerRequest);

            if (response.IsSuccessStatusCode)
                return null; 
            var apiMessage = await response.Content.ReadAsStringAsync();
            return string.IsNullOrWhiteSpace(apiMessage) ? "No se pudo crear el usuario." : apiMessage;
        }
    }

}
