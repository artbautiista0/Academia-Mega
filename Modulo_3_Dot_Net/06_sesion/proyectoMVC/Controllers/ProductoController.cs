using Microsoft.AspNetCore.Mvc;
using proyectoMVC.Models;
using System.Collections.Generic;

namespace proyectoMVC.Controllers
{
    public class ProductoController : Controller
    {
        private static readonly List<Producto> _producto = new()
        {
            new Producto { Id = 1, Nombre = "Producto 1", Precio = 8.00m },
            new Producto { Id = 2, Nombre = "Producto 2", Precio = 7.00m },
            new Producto { Id = 3, Nombre = "Producto 3", Precio = 5.00m },
        };

        public IActionResult Index()
        {
            return View(_producto);
        }

        public IActionResult Details(int id)
        {
            var producto = _producto.FirstOrDefault(p => p.Id == id);
            if (producto == null)
                return NotFound();

            return View(producto);
        }
    }
}
