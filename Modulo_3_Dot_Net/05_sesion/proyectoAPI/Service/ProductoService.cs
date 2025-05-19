using Microsoft.Data.SqlClient;
using proyectoAPI.Models;

namespace proyectoAPI.Service
{
    public class ProductoService
    {
        private readonly string _connectionString;

        public ProductoService(IConfiguration connectionString)
        {
            _connectionString = connectionString.GetConnectionString("DefaultConnection");
        }

        public async Task<List<Producto>> GetProductsAsync()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                var query = "SELECT * FROM Productos";
                var command = new SqlCommand(query, connection);
                var reader = await command.ExecuteReaderAsync();
                var productos = new List<Producto>();
                while (await reader.ReadAsync())
                {
                    var producto = new Producto
                    {
                        Id = reader.GetInt32(0),
                        Nombre = reader.GetString(1),
                        Precio = reader.GetDecimal(2),
                    };
                    productos.Add(producto);
                }
                return productos;
            }
        }

        public async Task<Producto> GetProductByIdAsync(int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                var query = "SELECT * FROM Productos WHERE Id = @Id";
                var command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@Id", id);
                var reader = await command.ExecuteReaderAsync();
                if (await reader.ReadAsync())
                {
                    return new Producto
                    {
                        Id = reader.GetInt32(0),
                        Nombre = reader.GetString(1),
                        Precio = reader.GetDecimal(2),
                    };
                }
                return null;
            }
        }

        public async Task CreateProductAsync(Producto producto)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                var query = "INSERT INTO Productos (Nombre, Precio) VALUES (@Nombre, @Precio)";
                var command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@Nombre", producto.Nombre);
                command.Parameters.AddWithValue("@Precio", producto.Precio);
                await command.ExecuteNonQueryAsync();
            }
        }

        public async Task UpdateProductAsync(Producto producto)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                var query = "UPDATE Productos SET Nombre = @Nombre, Precio = @Precio WHERE Id = @Id";
                var command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@Id", producto.Id);
                command.Parameters.AddWithValue("@Nombre", producto.Nombre);
                command.Parameters.AddWithValue("@Precio", producto.Precio);
                await command.ExecuteNonQueryAsync();
            }
        }

        public async Task DeleteProductAsync(int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                var query = "DELETE FROM Productos WHERE Id = @Id";
                var command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@Id", id);
                await command.ExecuteNonQueryAsync();
            }
        }
    }
}
