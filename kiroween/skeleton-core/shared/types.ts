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

export interface ApiError {
  message: string;
  code?: string;
  statusCode: number;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}
