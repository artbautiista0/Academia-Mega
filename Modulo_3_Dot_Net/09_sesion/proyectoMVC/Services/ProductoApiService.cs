using proyectoMVC.Models;
using System.Net.Http.Json;

namespace proyectoMVC.Services
{
    public class ProductoApiService : IProductoApiService
    {
        private readonly HttpClient _httpClient;

        public ProductoApiService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<Producto>> GetProductsAsync()
        {
            var apiResponse = await _httpClient.GetFromJsonAsync<ProductoApiResponse>("api/Producto/Products");
            return apiResponse?.Response ?? new List<Producto>();
        }

        public async Task<Producto?> GetProductByIdAsync(int id)
        {
            var apiResponse = await _httpClient.GetFromJsonAsync<ProductoApiResponseById>($"api/Producto/GetProduct/{id}");
            return apiResponse?.Response;

        }

        public async Task<bool> CreateProductAsync(Producto producto)
        {
            var response = await _httpClient.PostAsJsonAsync("api/Producto/CreateProduct", producto);
            return response.IsSuccessStatusCode;
        }

        public async Task<bool> UpdateProductAsync(Producto producto)
        {
            var response = await _httpClient.PutAsJsonAsync($"api/Producto/EditProduct/", producto);
            return response.IsSuccessStatusCode;
        }


        public async Task<bool> DeleteProductAsync(int id)
        {
            var response = await _httpClient.DeleteAsync($"api/Producto/DeleteProduct/{id}");
            return response.IsSuccessStatusCode;
        }

    }
}
