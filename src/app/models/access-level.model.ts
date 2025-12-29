export interface AccessLevelDTO {
  id?: number;
  name?: string;
  code?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  // Add other fields based on your backend response
}

export interface AccLevelAddRequestDTO {
  name: string;
  code: string;
  description?: string;
  // Add other fields as per your backend requirement
}

export interface ApiResponseDTO<T = any> {
  httpStatus: number;
  code: number;
  message: string;
  data: T;
  timestamp?: string;
}

export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
}