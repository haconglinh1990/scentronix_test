import axios from 'axios';

interface Server {
  url: string;
  priority: number;
  online?: boolean;
}

async function findServer(servers: Server[]): Promise<Server> {
  const requests = servers.map(server =>
    axios.get(server.url, { timeout: 5000 })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return { ...server, online: true };
        }
        return { ...server, online: false };
      })
      .catch(() => ({ ...server, online: false }))
  );

  const results = await Promise.all(requests);
  const onlineServers = results.filter(server => server.online);

  if (onlineServers.length === 0) {
    return Promise.reject(new Error('No servers are online'));
  }

  onlineServers.sort((a, b) => a.priority - b.priority);
  return onlineServers[0];
}

export default findServer;
