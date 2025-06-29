 
import delay from '../../utils/function/delay';
import { mockBlogs } from './mockBlogs';
import { BlogResponse } from './utils/types';
 

class HomeAPIClient {
  private readonly headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  private readonly apiUrl = 'http://localhost:3000';

  public async getBlogs(): Promise<BlogResponse> {
    await delay(1000);
    return mockBlogs;
  }
}

export const blogAPIClient = new HomeAPIClient();