using ChatServer.Services;

namespace ChatServer.Services
{
    public class ChatServiceImp : ChatService.ChatServiceBase
    {
        private readonly ChatHub _hub;
        private readonly ILogger<ChatServiceImp> _logger;

        public ChatServiceImp(ChatHub hub, ILogger<ChatServiceImp> logger)
        {
            _hub = hub ?? throw new ArgumentNullException(nameof(hub));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
    }
}
