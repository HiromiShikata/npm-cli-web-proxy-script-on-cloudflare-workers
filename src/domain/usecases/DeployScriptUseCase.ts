import { CloudFlareRepository } from './adapter-interfaces/CloudFlareRepository';
import { StorageRepository } from './adapter-interfaces/StorageRepository';

export class DeployScriptUseCase {
  constructor(
    private readonly storageRepository: StorageRepository,
    private readonly cloudFlareRepository: CloudFlareRepository,
  ) {}
  run = async (apiKeyToAuth: string, apiKeyToDeploy: string): Promise<void> => {
    const script = await this.storageRepository.load(
      'bin/src/domain/usecases/scriptOnWorker/index.js',
    );
    const replacedScript = script.replace('API_KEY_TO_AUTH', apiKeyToAuth);
    await this.cloudFlareRepository.deployScript(
      replacedScript,
      apiKeyToDeploy,
    );
  };
}
