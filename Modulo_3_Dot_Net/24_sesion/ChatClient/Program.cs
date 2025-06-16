using Grpc.Net.Client;
using Grpc.Core;
using GrpcChat;

internal class Program
{
    private static async Task Main(string[] args)
    {
        // URL del servidor  
        var channel = GrpcChannel.ForAddress("http://localhost:5034");
        var client = new ChatService.ChatServiceClient(channel); 

        // Crear stream bidireccional  
        using var call = client.ChatStream();

        // Pedir nombre de usuario  
        Console.Write("Nombre de usuario: ");
        var user = Console.ReadLine()?.Trim() ?? "Anónimo";

        // Iniciar tarea para recibir mensajes del servidor  
        var readTask = Task.Run(async () =>
        {
            try
            {
                await foreach (var message in call.ResponseStream.ReadAllAsync())
                {
                    var color = message.User == user ? ConsoleColor.Green : ConsoleColor.Yellow;
                    Console.ForegroundColor = color;
                    Console.WriteLine($"{message.User}: {message.Message}");
                    Console.ResetColor();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error recibiendo mensajes: {ex.Message}");
            }
        });

        // Enviar primer mensaje (registro en el servidor)  
        await call.RequestStream.WriteAsync(new ChatMessage { User = user, Message = $"{user} se ha unido al chat.", Timestamp = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds() });

        // Enviar mensajes del usuario  
        while (true)
        {
            var msg = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(msg)) continue;
            if (msg.Equals("/salir", StringComparison.OrdinalIgnoreCase)) break;

            await call.RequestStream.WriteAsync(new ChatMessage
            {
                User = user,
                Message = msg,
                Timestamp = DateTimeOffset.UtcNow.ToUnixTimeSeconds()
            });
        }

        // Cerrar el stream de envío  
        await call.RequestStream.CompleteAsync();
        await readTask;

        Console.WriteLine("Has salido del chat.");
    }
}
