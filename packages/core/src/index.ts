export interface WebQLConfig {
  endpoint: string;
  apiKey?: string;
}

export class WebQLCore {
  private config: WebQLConfig;

  constructor(config: WebQLConfig) {
    this.config = config;
  }

  async query(query: string): Promise<any> {
    // Basic query implementation
    console.log(`Executing query: ${query}`);
    console.log(`Using endpoint: ${this.config.endpoint}`);
    
    // Placeholder implementation
    return { data: null, success: true };
  }

  getConfig(): WebQLConfig {
    return { ...this.config };
  }
}

export * from './types'; 