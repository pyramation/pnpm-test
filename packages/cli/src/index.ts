import { WebQLCore, WebQLConfig } from '@pyramation/webql-core';
import * as packageJson from '../package.json';

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
    return packageJson.version;
  }
}

export * from '@webql/core'; 