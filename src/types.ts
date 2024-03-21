export type Result<T> = {
  result: T;
};

export type PaginationResult<T> = {
  result: T[];
  page: number;
  pageSize: number;
  total: number;
};
