using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proyectoAPI.Models;
using proyectoAPI.Service;

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

        private readonly ProductoService _productoService;
        public ProductoController(ProductoService productoService)
        {
            _productoService = productoService;
        }

        [HttpGet]
        [Route("Products")]
        public async Task<IActionResult> GetProducts()
        {
            try
            {
                var list = await _productoService.GetProductsAsync();
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "OK", response = list });
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = "Error interno de servidor " + e.Message });
            }
        }

        [HttpGet]
        [Route("GetProduct/{id}")]
        public async Task<IActionResult> GetProductById(int id)
        {
            Producto? _producto = await _productoService.GetProductByIdAsync(id);

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
        public async Task<IActionResult> CreateProduct(Producto _p)
        {
            try
            {
                await _productoService.CreateProductAsync(_p);
                return StatusCode(StatusCodes.Status201Created, new { mensaje = "Producto creado exitosamente", response = _p });
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = "Error interno de servidor " + e.Message });
            }
        }

        [HttpPut]
        [Route("EditProduct")]
        public async Task<IActionResult> EditProduct([FromBody] Producto actualizacion)
        {
            try
            {
                var existingProduct = await _productoService.GetProductByIdAsync(actualizacion.Id);
                if (existingProduct == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, new { mensaje = "Producto no encontrado" });
                }

                await _productoService.UpdateProductAsync(actualizacion);
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "Producto actualizado exitosamente", response = actualizacion });
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = "Error interno de servidor " + e.Message });
            }
        }

        [HttpDelete]
        [Route("DeleteProduct/{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            try
            {
                var deleteProduct = await _productoService.GetProductByIdAsync(id);
                if (deleteProduct == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, new { mensaje = "Producto no encontrado" });
                }
                await _productoService.DeleteProductAsync(id);
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "Producto eliminado exitosamente" });
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = "Error interno de servidor " + e.Message });
            }
        }
    }
}
