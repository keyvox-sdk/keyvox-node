import 'dotenv/config';
import process from 'node:process';

class KeyVox {
    baseURL = process.env.APP_LOCAL_URL ?? 'https://keyvox.dev/api';
    /**
     *
     * @param {string} apiKey
     */
    constructor(apiKey) {
        this.apiKey = apiKey;



        this.articles = {
            /**
             *
             * @returns {Promise<Object>}
             */
            list: async (option) => {

                const {itemsPerPage} = option ?? 2

                try {
                    let url = `${this.baseURL}/api/articles`;
                    url = new URL(url)
                    if (itemsPerPage) {
                        url.searchParams.append('itemsPerPage', itemsPerPage)
                    }

                    url = url.toString();

                    const headers = {
                        key: this.apiKey,
                    };

                    const response = await fetch(url, {
                        method: 'get',
                        headers,
                    });

                    const data = await response.json();
                    return data;
                } catch (error) {
                    console.log(error)
                }
            },

            /**
             *
             * @param {string} id
             * @returns {Promise<Object>}
             */
            getById: async (id) => {
                console.log(id);
            },

            /**
             *
             * @param {string} slug
             */
            getBySlug: async (slug) => {
                console.log(slug);
            }
        }
    }
}

export default KeyVox