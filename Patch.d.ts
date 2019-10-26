import { SanityClient } from './SanityClient';
import { IDataRequestOptions } from './IDataRequestOptions';
import { ISanityDocument } from './ISanityDocument';
import { IMutateResult } from './IMutateResult';

export declare type PatchOperationTypes =
    'unset' |
    'insert' |
    'append' |
    'prepend' |
    'splice' |
    'ifRevisionId';

export declare type PatchOperations<P> = {
    set?: P;
    setIfMissing?: P;
    replace?: P;
    inc?: P;
    dec?: P;
    diffMatchPatch: P;
    unset?: string[];
    insert?: any;
    append?: any;
    prepend?: any;
    splice?: any;
}

export declare class Patch<P = any> {
    set<P>(props: P): Patch<P>;
    setIfMissing<P>(props: P): Patch<P>;
    replace<P>(props: P): Patch<P>;
    inc<P>(props: P): Patch<P>;
    dec<P>(props: P): Patch<P>;
    diffMatchPatch<P>(props: P): Patch<P>;
    unset(attrs: string[]): Patch<P>;
    insert<I>(at: 'after' | 'before', selector: string, items: I[]): Patch<P>;
    append<I>(selector: string, items: I[]): Patch<P>;
    prepend<I>(selector: string, items: I[]): Patch<P>;
    splice<I>(selector: string, start: number, deleteCount: number, items?: I[]): Patch<P>;
    ifRevisionId(rev: string): Patch<P>;
    serialize(): string;
    toJSON(): string;
    reset(): Patch<P>;
    commit<P = any>(options: IDataRequestOptions): Promise<IMutateResult>;
    constructor(selection: string, operations?: PatchOperations<P>, client?: SanityClient);
}