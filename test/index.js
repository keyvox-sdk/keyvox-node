import {test } from 'node:test';
import assert from 'node:assert';
import KeyVox from '../src/KeyVox.js';
import 'dotenv/config'

const kv = new KeyVox(process.env.KEY)
test('articles.list()', {skip: false}, async (t) => {
    const articles = await kv.articles.list({
        itemsPerPage: 2,
        page: 1
    });

    console.log(articles);
});

test('articles.getById()', {skip: true}, async (t) => {
    const article = await kv.articles.getById(process.env.ARTICLE_ID);
    console.log(article);
})

test('articles.getBySlug()', {skip: true}, async (t) => {
    const article = await kv.articles.getBySlug('title-3');
    console.log(article);
})

test('tags.list()', {skip: true}, async (t) => {
    const tags = await kv.tags.list();
    console.log(tags);
})

test('tags.getById()', {skip: true}, async (t) => {
    const tag = await kv.tags.getById(process.env.TAG_ID)
    console.log(tag)
})

test('tags.getBySlug()', {skip: true}, async (t) => {
    const tag = await kv.tags.getBySlug('bitcoin')
    console.log(tag)
})





