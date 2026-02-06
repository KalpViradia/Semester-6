export declare class DemosController {
    handleAllMethods(): string;
    customHttpCode(): string;
    createdStatus(): string;
    redirectToGoogle(): void;
    redirectToHome(): void;
    dynamicRedirect(): {
        url: string;
        statusCode: number;
    };
    customHeaders(): string;
    jsonWithHeaders(): object;
    getFile(folder: string, filename: string): object;
    browseItems(category: string, subcategory: string, item: string): object;
    getUserById(id: string): object;
    getPrimeNumbers(start: string, end: string): object;
    private isPrime;
    private findPrimes;
    getPagination(pageNo: string): object;
    getAllParams(params: Record<string, string>): object;
}
