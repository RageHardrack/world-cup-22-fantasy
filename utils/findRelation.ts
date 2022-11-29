export const findRelationById = (parentDB: any, id: string) =>
  parentDB.find((item: any) => item.id === id);
