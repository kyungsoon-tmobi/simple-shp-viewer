import fs from 'node:fs';
import path from 'node:path';
import ShpReader from '../modules/shp-reader.js';

const rootPath = process.cwd();

const arrayBuffer = readFile('resources/Duraklar.shp');
const reader = new ShpReader(arrayBuffer);

for (const feature of reader.featureIterator()) {
    console.log(feature);
}

function readFile(relativePath) {
    const shpPath = path.resolve(rootPath, relativePath);
    const result = fs.readFileSync(shpPath);
    return result.buffer;
}
