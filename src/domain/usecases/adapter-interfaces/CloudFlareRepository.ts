export interface CloudFlareRepository {
  deployScript: (script: string, apiKey: string) => Promise<void>;
}
