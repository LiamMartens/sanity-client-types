import { IRequestOptions } from './IRequestOptions';

export declare interface IDataRequestOptions extends IRequestOptions {
    returnFirst?: boolean;
    returnDocuments?: boolean;
    visibility?: string;
    filterResponse?: boolean;
}