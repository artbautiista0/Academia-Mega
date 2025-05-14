namespace primeraAPI.Models
{
    public class Saludo
    {
        public string? Nombre { get; set; }
        public string? Mensaje { get; set; }
        public Saludo(string nombre, string mensaje)
        {
            Nombre = nombre;
            Mensaje = mensaje;
        }
        public Saludo()
        {
            Nombre = "Arturo";
            Mensaje = "Hola";
        }

        public string GetSaludo()
        {
            return Mensaje + " " + Nombre;
        }
    }
}
