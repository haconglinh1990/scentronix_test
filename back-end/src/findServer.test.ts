import findServer from './findServer';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('findServer', () => {
  it('should resolve and return the online server with the lowest priority', async () => {
    const servers = [
      { url: 'https://does-not-work.perfume.new', priority: 1 },
      { url: 'https://gitlab.com', priority: 4 },
      { url: 'http://app.scnt.me', priority: 3 },
      { url: 'https://offline.scentronix.com', priority: 2 },
    ];

    mockedAxios.get
      .mockImplementationOnce(() => Promise.reject(new Error('Network Error')))
      .mockImplementationOnce(() => Promise.resolve({ status: 200 }))
      .mockImplementationOnce(() => Promise.resolve({ status: 200 }))
      .mockImplementationOnce(() => Promise.reject(new Error('Network Error')));

    const result = await findServer(servers);
    expect(result).toEqual({ url: 'http://app.scnt.me', priority: 3, online: true });
  });

  it('should reject with an error if no servers are online', async () => {
    const servers = [
      { url: 'https://does-not-work.perfume.new', priority: 1 },
      { url: 'https://gitlab.com', priority: 4 },
      { url: 'http://app.scnt.me', priority: 3 },
      { url: 'https://offline.scentronix.com', priority: 2 },
    ];

    mockedAxios.get
      .mockImplementationOnce(() => Promise.reject(new Error('Network Error')))
      .mockImplementationOnce(() => Promise.reject(new Error('Network Error')))
      .mockImplementationOnce(() => Promise.reject(new Error('Network Error')))
      .mockImplementationOnce(() => Promise.reject(new Error('Network Error')));

    await expect(findServer(servers)).rejects.toThrow('No servers are online');
  });
});
