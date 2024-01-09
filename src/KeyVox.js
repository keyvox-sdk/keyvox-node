class KeyVox {
    baseURL = ''

    /**
     *
     * @param {string} apiKey
     * @param {Object} options
     */
    constructor(apiKey, options) {
        this.apiKey = apiKey;

        this.baseURL = options?.baseURL ?? 'https://keyvox.dev/api'


        this.articles = {
            /**
             *
             * @returns {Promise<Object>}
             */
            list: async (option) => {

                const {itemsPerPage} = option ?? 2;
                const {page} = option ?? 1;

                let url = `${this.baseURL}/articles`;

                url = new URL(url)

                if (itemsPerPage) {
                    url.searchParams.append('itemsPerPage', itemsPerPage)
                }

                if (page) {
                    url.searchParams.append('page', page)
                }

                url = url.toString();

                return await this.#fetchData(url, 'get');
            },

            /**
             *
             * @param {string} id
             * @returns {Promise<Object>}
             */
            getById: async (id) => {
                const url = `${this.baseURL}/api/articles/${id}`;
                return await this.#fetchData(url, 'get');
            },

            /**
             *
             * @param {string} slug
             */
            getBySlug: async (slug) => {
                const url = `${this.baseURL}/api/articles/${slug}`;
                return await this.#fetchData(url, 'get');
            },
        }

        this.tags = {
            /**
             *
             * @return {Promise<any|undefined>}
             */
            list: async () => {
                const url = `${this.baseURL}/api/tags`;
                return await this.#fetchData(url, 'get');
            },

            /**
             *
             * @param {string} id
             * @return {Promise<any|undefined>}
             */
            getById: async (id) => {
                const url = `${this.baseURL}/api/tags/${id}`;
                return await this.#fetchData(url, 'get');
            },

            /**
             *
             * @param {string} slug
             * @return {Promise<void>}
             */
            getBySlug: async (slug) => {
                const url = `${this.baseURL}/api/tags/${slug}`;
                return await this.#fetchData(url, 'get');
            },
        }
    }

    async #fetchData(url, verb) {
        try {
            const headers = {
                key: this.apiKey,
            };

            const response = await fetch(url, {
                method: verb,
                headers
            });

            if ( ! response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }
}

export default KeyVox;