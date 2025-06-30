#!/usr/bin/env node

import { WebQLCLI } from './index';

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('WebQL CLI');
    console.log('Usage: webql <query>');
    console.log('Example: webql "SELECT * FROM users"');
    return;
  }

  if (args[0] === '--version' || args[0] === '-v') {
    const cli = new WebQLCLI({ endpoint: '' });
    console.log(`WebQL CLI v${cli.getVersion()}`);
    return;
  }

  const query = args.join(' ');
  const cli = new WebQLCLI({
    endpoint: process.env.WEBQL_ENDPOINT || 'http://localhost:3000',
    apiKey: process.env.WEBQL_API_KEY
  });

  await cli.executeQuery(query);
}

main().catch(console.error); 