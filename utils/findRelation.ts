export const findRelationById = (parentDB: any, id: string | undefined) =>
  parentDB.find((item: any) => item.id === id) || null;
