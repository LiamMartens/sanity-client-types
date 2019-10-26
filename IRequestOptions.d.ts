export declare interface IRequestOptions {
    method?: 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    url?: string;
    uri?: string;
    token?: string;
    useGlobalApi?: boolean;
    withCredentials?: boolean;
    timeout?: number;
}