class KeyVox {
    /**
     *
     * @param {string} apiKey
     */
    constructor(apiKey) {
        this.apiKey = apiKey;

        this.articles = {
            async list() {
                console.log('list')
            },

            /**
             *
             * @param {string} id
             */
            async getById(id) {

            },

            /**
             *
             * @param {string} slug
             */
            async getBySlug(slug) {

            }
        }
    }
}

export default KeyVox