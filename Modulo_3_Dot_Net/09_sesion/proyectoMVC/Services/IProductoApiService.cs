using proyectoMVC.Models;

namespace proyectoMVC.Services
{
    public interface IProductoApiService
    {
        Task<List<Producto>> GetProductsAsync();
        Task<Producto?> GetProductByIdAsync(int id);
        Task<bool> CreateProductAsync(Producto producto);
        Task<bool> UpdateProductAsync(Producto producto);
        Task<bool> DeleteProductAsync(int id);
    }
}
