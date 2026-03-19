import { request, APIRequestContext } from '@playwright/test';

export class APIClient {
  private context!: APIRequestContext;

  async init() {
    this.context = await request.newContext({
      baseURL: 'https://jsonplaceholder.typicode.com',
      extraHTTPHeaders: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      }
    });
  }

  async get(url: string) {
    return await this.context.get(url);
  }

  async post(url: string, body: any) {
    return await this.context.post(url, { data: body });
  }
}