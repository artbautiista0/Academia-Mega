using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using primeraAPI.Models;

namespace primeraAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SaludoController : ControllerBase
    {
        
        [HttpGet]
        [Route("saludo")]
        public IActionResult GetSaludo()
        {
            try
            {
                Saludo saludo = new();
                string result = saludo.GetSaludo();
                return StatusCode(StatusCodes.Status200OK, new { mensaje = result });
            }
            catch (Exception e)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = "Error interno de servidor " + e });
            }

        }

        [HttpGet]
        [Route("saludoParametro/{nombre}")]
        public IActionResult GetSaludoParametro(string nombre)
        {
            try
            {
                Saludo saludo = new Saludo(nombre, "Hola");
                string result = saludo.GetSaludo();
                return StatusCode(StatusCodes.Status200OK, new { mensaje = result });
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = "Error interno de servidor " + e });
            }
        }
    }
}
