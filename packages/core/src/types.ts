export interface QueryResult {
  data: any;
  success: boolean;
  error?: string;
}

export interface WebQLOptions {
  timeout?: number;
  retries?: number;
} 