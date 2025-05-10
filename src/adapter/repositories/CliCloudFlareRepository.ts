import { CloudFlareRepository } from '../../domain/usecases/adapter-interfaces/CloudFlareRepository';

export class CliCloudFlareRepository implements CloudFlareRepository {
  deployScript = async (script: string, apiKey: string): Promise<void> => {};
}
