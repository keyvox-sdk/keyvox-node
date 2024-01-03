import {test } from 'node:test';
import assert from 'node:assert';
import KeyVox from '../src/KeyVox.js';
import 'dotenv/config'

test('load key', async (t) => {
    const kv = new KeyVox(process.env.KEY)

    // const articles = await kv.articles.list({
    //     itemsPerPage: 2,
    //     page: 1
    // });

    //const article = await kv.articles.getById(process.env.ARTICLE_ID)
    //const article = await kv.articles.getBySlug('title-3')
    //console.log(article)

    const tags = await kv.tags.list()
    console.log(tags)
});



