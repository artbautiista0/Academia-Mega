using proyectoMVC.Models;

namespace proyectoMVC.Services
{
    public interface IAuthService
    {
        Task<LoginResponse?> LoginAsync(string username, string password);
    }
}
