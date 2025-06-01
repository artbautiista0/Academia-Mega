using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using proyectoMVC.Models;
using System.Threading.Tasks;
using proyectoMVC.Services;
using System.Reflection;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace proyectoMVC.Controllers
{
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(Login model, string? returnUrl = null)
        {
            if (!ModelState.IsValid)
                return View(model);

            var loginResponse = await _authService.LoginAsync(model.User, model.Pass);

            if (loginResponse != null && !string.IsNullOrEmpty(loginResponse.Token))
            {
                var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, model.User),
                new Claim("AccessToken", loginResponse.Token)

            };

                var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

                await HttpContext.SignInAsync(
                    CookieAuthenticationDefaults.AuthenticationScheme,
                    new ClaimsPrincipal(claimsIdentity));

                return RedirectToLocal(returnUrl);
            }

            ModelState.AddModelError("", "Usuario o contraseña incorrectos.");
            return View(model);
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(Login login)
        {
            if (!ModelState.IsValid)
                return View(login);

            var errorMessage = await _authService.RegisterAsync(login);
            if (errorMessage == null)
            {
                TempData["RegisterMessage"] = "Usuario creado correctamente.";
                return RedirectToAction("Login");
            }

            ModelState.AddModelError("", errorMessage);
            return View(login);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction("Login", "Auth");
        }

        private IActionResult RedirectToLocal(string? returnUrl)
        {
            if (!string.IsNullOrEmpty(returnUrl) && Url.IsLocalUrl(returnUrl))
                return Redirect(returnUrl);
            else
                return RedirectToAction("Index", "Home");
        }
    }
}
