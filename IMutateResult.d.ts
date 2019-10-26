export declare interface IMutateResult {
    transactionId: string;
    results: {
        id: string;
        operation: string;
    }[];
}