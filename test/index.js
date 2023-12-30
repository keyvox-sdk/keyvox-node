import {test } from 'node:test';
import assert from 'node:assert';
import KeyVox from '../src/KeyVox.js';
import 'dotenv/config'

test('load key', (t) => {
    const kv = new KeyVox(process.env.KEY)

    console.log(kv);
});



