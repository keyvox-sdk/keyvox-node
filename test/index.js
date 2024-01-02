import {test } from 'node:test';
import assert from 'node:assert';
import KeyVox from '../src/KeyVox.js';
import 'dotenv/config'

test('load key', async (t) => {
    const kv = new KeyVox(process.env.KEY)

    const articles = await kv.articles.list({
        itemsPerPage: 2,
        page: 1
    });

    console.log(articles)
});



