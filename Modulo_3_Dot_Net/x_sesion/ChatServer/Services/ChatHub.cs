using Grpc.Core;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Graph;
using Microsoft.Graph.Models;
using System.Collections.Concurrent;

namespace ChatServer.Services
{
    public class ChatHub // Corrected the inheritance to use ChatBase directly  
    {
        private static readonly ConcurrentDictionary<string, IServerStreamWriter<ChatMessage>> _clients = new();

        public void Join(string userName, IServerStreamWriter<ChatMessage> responseStream)
            => 
    }
}
