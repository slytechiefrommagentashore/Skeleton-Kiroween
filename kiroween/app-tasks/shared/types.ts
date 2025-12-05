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

export type TaskStatus = 'pending' | 'in-progress' | 'completed';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskInput {
  title: string;
  status?: TaskStatus;
}

export interface UpdateTaskInput {
  title?: string;
  status?: TaskStatus;
}
