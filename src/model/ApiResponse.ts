import { AxiosError } from "axios";

export interface ApiResponse<T> {
    data?: T;
    status: 'idle' | 'loading' | 'success' | 'failed';
    error?: string | AxiosError | null
}