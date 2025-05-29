using proyectoMVC.Models;
using System.Net.Http.Json;

namespace proyectoMVC.Services
{
    public class ProductoApiService : IProductoApiService
    {
        private readonly HttpClient _httpClient;
        private readonly IHttpContextAccessor _httpContext;

        public ProductoApiService(HttpClient httpClient, IHttpContextAccessor httpContext)
        {
            _httpClient = httpClient;
            _httpContext = httpContext;
        }

        private void AddJwtToken()
        {
            var token = _httpContext.HttpContext?.User.Claims.FirstOrDefault(t => t.Type == "AccessToken")?.Value;

            if (!string.IsNullOrEmpty(token))
            {
                _httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);
            }
        }

        public async Task<List<Producto>> GetProductsAsync()
        {
            AddJwtToken();
            var apiResponse = await _httpClient.GetFromJsonAsync<ProductoApiResponse>("api/Producto/Products");
            return apiResponse?.Response ?? new List<Producto>();
        }

        public async Task<Producto?> GetProductByIdAsync(int id)
        {
            AddJwtToken();
            var apiResponse = await _httpClient.GetFromJsonAsync<ProductoApiResponseById>($"api/Producto/GetProduct/{id}");
            return apiResponse?.Response;

        }

        public async Task<bool> CreateProductAsync(Producto producto)
        {
            AddJwtToken();
            var response = await _httpClient.PostAsJsonAsync("api/Producto/CreateProduct", producto);
            return response.IsSuccessStatusCode;
        }

        public async Task<bool> UpdateProductAsync(Producto producto)
        {
            AddJwtToken();
            var response = await _httpClient.PutAsJsonAsync($"api/Producto/EditProduct/", producto);
            return response.IsSuccessStatusCode;
        }


        public async Task<bool> DeleteProductAsync(int id)
        {
            AddJwtToken();
            var response = await _httpClient.DeleteAsync($"api/Producto/DeleteProduct/{id}");
            return response.IsSuccessStatusCode;
        }

    }
}
