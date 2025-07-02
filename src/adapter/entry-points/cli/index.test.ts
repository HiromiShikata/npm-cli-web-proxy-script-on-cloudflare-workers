import { execSync } from 'child_process';

describe('commander program', () => {
  it('should output help contents', () => {
    const output = execSync(
      'npx ts-node ./src/adapter/entry-points/cli/index.ts -h',
    ).toString();

    expect(output.trim()).toEqual(`Usage: Deploy web proxy script to cloudflare workers [options]

This command will deploy the web proxy script to cloudflare workers

Options:
  -p, --proxyUrl <proxyUrl>          Proxy URL. example:
                                     https://user:password@proxy.example.com:8080
  --apiKeyToDeploy <apiKeyToDeploy>  API Key to deploy proxy script to
                                     cloudflare workers
  --apiKeyToAuth <apiKeyToAuth>      API Key to authenticate the user
  -h, --help                         display help for command`)
  });
  it('should output file contents', () => {
    const output = execSync(
      'npx ts-node ./src/adapter/entry-points/cli/index.ts ./testdata/src/domain/entities',
    ).toString();

    expect(output.trim()).toEqual(
      JSON.stringify('./testdata/src/domain/entities'),
    );
  });
});
