namespace proyecto
{
    class Program
    {
        private const int max_attempts = 3;

        private static Dictionary<string, string> users = new Dictionary<string, string>()
            {
                { "admin", "p4$w0rd" },
                { "user", "k3yp4ss" }
            };
        static void Main(string[] args)
        {
            string? result = Login();

            if (result != null)
            {
                Console.WriteLine("\n" + result);
            }
            else
            {
                Console.WriteLine("Te haz quedado sin intentos...");
            }

            Console.WriteLine("Presiona cualquier tecla para finalizar...");
            Console.ReadKey();

        }

        private static string? Login()
        {
            int attempts = max_attempts;
            while (attempts > 0)
            {
                Console.WriteLine("Inicia Sesion.\n");

                Console.Write("Usuario: ");
                string? username = Console.ReadLine();
                Console.Write("Contraseña: ");
                string? password = GetHiddenPassword();

                if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                {
                    Console.WriteLine("\nUsuario o contraseña no pueden estar vacios.");
                    attempts--;
                    Console.WriteLine("Te quedan " + attempts + " intentos.");
                    Console.WriteLine("Presiona cualquier tecla para continuar...");
                    Console.ReadKey();
                    Console.Clear();
                    continue;
                }

                var isValidUser = users.FirstOrDefault(x => x.Key == username && x.Value == password);
                if (isValidUser.Key != null)
                {
                    return "Bienvenido " + username;
                }
                else
                {
                    attempts--;
                    Console.WriteLine("\n\nUsuario o contraseña incorrectos. Te quedan " + attempts + " intentos.");
                    Console.WriteLine("Presiona cualquier tecla para continuar...");
                    Console.ReadKey();
                    Console.Clear();
                }

            }

            return null;
        }

        private static string GetHiddenPassword()
        {
            string password = string.Empty;
            ConsoleKeyInfo key;
            do
            {
                key = Console.ReadKey(true);
                if (key.Key != ConsoleKey.Backspace && key.Key != ConsoleKey.Enter)
                {
                    password += key.KeyChar;
                    Console.Write("*");
                }
                else
                {
                    if (key.Key == ConsoleKey.Backspace && password.Length > 0)
                    {
                        password = password[0..^1];
                        Console.Write("\b \b");
                    }
                }
            } while (key.Key != ConsoleKey.Enter);
            return password;
        }

    }
}
