import type { DataProvider } from '@refinedev/core';

const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:4000/api';

export const stubDataProvider: DataProvider = {
  getApiUrl: () => apiUrl,
  getList: async () => ({ data: [], total: 0 }),
  getOne: async () => ({ data: {} as never }),
  getMany: async () => ({ data: [] }),
  create: async ({ variables }) => ({ data: (variables ?? {}) as never }),
  update: async ({ variables }) => ({ data: (variables ?? {}) as never }),
  deleteOne: async () => ({ data: {} as never }),
};
