declare module 'keyvox-node' {
    class KeyVox {
        apiKey: string;

        constructor(apiKey: string);

        articles: {
            list(option?: { itemsPerPage?: number }): Promise<Object>;
            getById(id: string): Promise<Object>;
            getBySlug(slug: string): Promise<void>;
        };

        tags: {
            list(): Promise<any | undefined>;
            getById(id: string): Promise<any | undefined>;
            getBySlug(slug: string): Promise<void>;
        };

        private fetchData(url: string, verb: string): Promise<any>;
    }

    export default KeyVox;
}