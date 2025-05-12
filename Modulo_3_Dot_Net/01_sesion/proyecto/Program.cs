namespace proyecto
{
    class Program
    {
        static void Main(string[] args)
        {
            int attempts = 3;
            Dictionary<string, string> users = new Dictionary<string, string>()
            {
                { "admin", "p4$w0rd" },
                { "user", "k3yp4ss" }
            };

            while(attempts > 0)
            {
                Console.WriteLine("Inicia Sesion.\n");

                Console.Write("Usuario: ");
                string? username = Console.ReadLine();
                Console.Write("Contraseña: ");
                string? password = Console.ReadLine();

                var isValidUser = users.FirstOrDefault(x => x.Key == username && x.Value == password);
                if (isValidUser.Key != null)
                {
                    Console.WriteLine("\nBienvenido " + username);
                    break;
                }
                else
                {
                    attempts--;
                    Console.WriteLine("\nUsuario o contraseña incorrectos. Te quedan " + attempts + " intentos.");
                    Console.WriteLine("Presiona cualquier tecla para continuar...");
                    Console.ReadKey();
                    Console.Clear();
                }

            }

            Console.WriteLine("Presiona cualquier tecla para finalizar...");
            Console.ReadKey();

        }
    }
}
