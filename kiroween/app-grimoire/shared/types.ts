export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  meta?: PaginationMeta;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages?: number;
}

export interface Spell {
  id: string;
  name: string;
  incantation: string;
  ingredients: string;
  powerLevel: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSpellInput {
  name: string;
  incantation: string;
  ingredients: string;
  powerLevel: number;
}

export interface UpdateSpellInput {
  name?: string;
  incantation?: string;
  ingredients?: string;
  powerLevel?: number;
}
