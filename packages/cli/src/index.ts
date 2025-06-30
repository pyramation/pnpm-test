import { WebQLCore, WebQLConfig } from '@webql/core';

export class WebQLCLI {
  private core: WebQLCore;

  constructor(config: WebQLConfig) {
    this.core = new WebQLCore(config);
  }

  async executeQuery(query: string): Promise<void> {
    try {
      const result = await this.core.query(query);
      console.log('Query result:', JSON.stringify(result, null, 2));
    } catch (error) {
      console.error('Query failed:', error);
      process.exit(1);
    }
  }

  getVersion(): string {
    return require('../package.json').version;
  }
}

export * from '@webql/core'; 