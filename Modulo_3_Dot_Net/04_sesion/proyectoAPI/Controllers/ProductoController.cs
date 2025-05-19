using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proyectoAPI.Models;

namespace proyectoAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductoController : Controller
    {
        public static readonly List<Producto> _productos = new()
        {
            new Producto { Id = 1, Nombre = "Producto 1", Precio = 10.99m },
            new Producto { Id = 2, Nombre = "Producto 2", Precio = 20.99m },
            new Producto { Id = 3, Nombre = "Producto 3", Precio = 30.99m }
        };

        [HttpGet]
        [Route("Products")]
        public ActionResult<Producto> GetProducts()
        {
            try
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "OK", response = _productos });
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = "Error interno de servidor " + e.Message });
            }
        }

        [HttpGet]
        [Route("GetProduct/{id}")]
        public ActionResult<Producto> GetProductById(int id)
        {
            Producto? _producto = _productos.FirstOrDefault(item => item.Id == id);

            try
            {
                if (_producto == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, new { mensaje = "Producto no encontrado" });
                }

                return StatusCode(StatusCodes.Status200OK, new { mensaje = "OK", response = _producto });
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = "Error interno de servidor " + e.Message });

            }
        }

        [HttpPost]
        [Route("CreateProduct")]
        public ActionResult CreateProduct(Producto _p)
        {
            try
            { 
                _p.Id = _productos.Any() ? _productos.Max(producto => producto.Id) + 1 : 1;
                _productos.Add(_p);
                return StatusCode(StatusCodes.Status201Created, new { mensaje = "Producto creado exitosamente", response = _p });
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = "Error interno de servidor " + e.Message });
            }
        }

        [HttpPut]
        [Route("EditProduct/{id}")]
        public IActionResult EditProduct(int id, [FromBody] Producto actualizacion) 
        {
            try
            {
                var Producto = _productos.FirstOrDefault(p => p.Id == id);
                if (Producto == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, new { mensaje = "Producto no encontrado" });
                }

                Producto.Nombre = actualizacion.Nombre;
                Producto.Precio = actualizacion.Precio;

                return StatusCode(StatusCodes.Status200OK, new { mensaje = "Producto actualizado exitosamente", response = Producto });

            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = "Error interno de servidor " + e.Message });
            }
        }

        [HttpDelete]
        [Route("DeleteProduct/{id}")]
        public ActionResult DeleteProduct(int id)
        {
            try
            {
                var producto = _productos.FirstOrDefault(p => p.Id == id);
                if (producto == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, new { mensaje = "Producto no encontrado" });
                }

                _productos.Remove(producto);
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "Producto eliminado exitosamente" });
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = "Error interno de servidor " + e.Message });
            }
        }
    }
}
