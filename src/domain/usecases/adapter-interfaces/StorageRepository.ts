export interface StorageRepository {
  load(path: string): Promise<string>;
}
