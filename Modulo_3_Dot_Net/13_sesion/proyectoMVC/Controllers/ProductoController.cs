using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using proyectoMVC.Models;
using proyectoMVC.Services;
using System.Collections.Generic;

namespace proyectoMVC.Controllers
{
    [Authorize]
    public class ProductoController : Controller
    {

        private readonly IProductoApiService _productoApiService;

        public ProductoController(IProductoApiService productoApiService)
        {
            _productoApiService = productoApiService;
        }

        public async Task<IActionResult> Index()
        {
            try
            {
                var product = await _productoApiService.GetProductsAsync();
                return View(product);
            }
            catch (HttpRequestException ex)
            {

                return RedirectToAction("Login", "Auth");
            }
        }

        public async Task<IActionResult> Details(int id)
        {
            var product = await _productoApiService.GetProductByIdAsync(id);

            return View(product);
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Producto producto)
        {
            if (ModelState.IsValid)
            {
                var result = await _productoApiService.CreateProductAsync(producto);
                if (result)
                    return RedirectToAction(nameof(Index));
                ModelState.AddModelError("", "No se pudo crear el producto.");
            }
            return View(producto);
        }

        [HttpGet]
        public async Task<IActionResult> Edit(int id)
        {
            var producto = await _productoApiService.GetProductByIdAsync(id);
            if (producto == null)
                return NotFound();
            return View(producto);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, Producto producto)
        {
            if (id != producto.Id)
                return BadRequest();

            if (ModelState.IsValid)
            {
                var result = await _productoApiService.UpdateProductAsync(producto);
                if (result)
                    return RedirectToAction(nameof(Index));
                ModelState.AddModelError("", "No se pudo actualizar el producto.");
            }
            return View(producto);
        }

        [HttpGet]
        public async Task<IActionResult> Delete(int id)
        {
            var producto = await _productoApiService.GetProductByIdAsync(id);
            if (producto == null)
                return NotFound();
            return View(producto);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var result = await _productoApiService.DeleteProductAsync(id);
            if (!result)
            {
                ModelState.AddModelError("", "No se pudo eliminar el producto.");
                var producto = await _productoApiService.GetProductByIdAsync(id);
                return View(producto);
            }
            return RedirectToAction(nameof(Index));
        }

    }
}
