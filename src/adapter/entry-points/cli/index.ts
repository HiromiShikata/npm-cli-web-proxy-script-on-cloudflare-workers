#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();
program
  .option('-p, --proxyUrl <proxyUrl>', 'Proxy URL. example: https://user:password@proxy.example.com:8080')
  .option(
    '--apiKeyToDeploy <apiKeyToDeploy>',
    'API Key to deploy proxy script to cloudflare workers',
  )
  .option('--apiKeyToAuth <apiKeyToAuth>', 'API Key to authenticate the user')
  .name('Deploy web proxy script to cloudflare workers')
  .description(
    'This command will deploy the web proxy script to cloudflare workers',
  )
  .action(async (options) => {
    console.log(JSON.stringify({
      proxyUrl: options.proxyUrl,
      apiKeyToDeploy: options.apiKeyToDeploy,
      apiKeyToAuth: options.apiKeyToAuth
    }));
  });
if (process.argv) {
  program.parse(process.argv);
}
