import { ISanityClientOptions } from './ISanityClientOptions';
import { ISanityClientDefaultOptions } from './ISanityClientDefaultOptions';
import { IRequestOptions } from './IRequestOptions';
import { IDataRequestOptions } from './IDataRequestOptions';
import { ISanityDocument } from './ISanityDocument';
import { Patch, PatchOperations } from './Patch';
import { IMutateResult } from './IMutateResult';

export declare class SanityClient {
    constructor(options: ISanityClientOptions & Partial<ISanityClientDefaultOptions>);
    auth: {
        getLoginProviders(): Promise<{
            thirdPartyLogin: boolean;
            providers: {
                name: string;
                title: string;
                url: string;
            }[];
        }>;
        logout(): void;
    };
    config(options: ISanityClientOptions & Partial<ISanityClientDefaultOptions>): SanityClient;
    getUrl(uri: string, canUseCdn?: boolean): string;
    isPromiseAPI(): boolean;
    request<R = any>(options: IRequestOptions): Promise<R>;
    getDataUrl(operation: string, path: string): string;
    fetch<R = any, P = any>(query: string, params?: P, options?: IDataRequestOptions): Promise<R>;
    getDocument<D extends ISanityDocument>(id: string): Promise<D | null>;
    getDocuments<D extends ISanityDocument>(ids: string[]): Promise<D[] | null>;
    create<D>(doc: D, options?: IDataRequestOptions): Promise<D & Required<ISanityDocument> | null>;
    createIfNotExists<D>(doc: D, options?: IDataRequestOptions): Promise<D & Required<ISanityDocument> | null>;
    createOrReplace<D>(doc: D, options?: IDataRequestOptions): Promise<D & Required<ISanityDocument> | null>;
    patch<D>(selector: string, operations?: PatchOperations<D>): Patch<D>;
    delete(id: string, options?: IDataRequestOptions): Promise<IMutateResult>;
    mutate<D>(mutations: {
        create: D;
        createIfNotExists: D;
        createOrReplace: D;
        patch: PatchOperations<D>;
        delete: {
            id: string;
        };
    }, options?: IDataRequestOptions): Promise<IMutateResult>;
}