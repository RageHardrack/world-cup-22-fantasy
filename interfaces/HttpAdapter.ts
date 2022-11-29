export interface HttpAdapter {
  getDatabase<T>(databaseId: string): Promise<T>;
  getPage<T>(pageId: string): Promise<T>;
  getPageContent<T>(blockId: string): Promise<T>;
}
