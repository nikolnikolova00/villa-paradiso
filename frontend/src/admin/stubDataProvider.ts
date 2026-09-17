import type { DataProvider } from '@refinedev/core';

export const stubDataProvider: DataProvider = {
  getApiUrl: () => 'http://localhost:4000/api',
  getList: async () => ({ data: [], total: 0 }),
  getOne: async () => ({ data: {} as never }),
  getMany: async () => ({ data: [] }),
  create: async ({ variables }) => ({ data: (variables ?? {}) as never }),
  update: async ({ variables }) => ({ data: (variables ?? {}) as never }),
  deleteOne: async () => ({ data: {} as never }),
};
