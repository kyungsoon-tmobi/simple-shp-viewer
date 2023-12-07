import { addButton } from './elements.js';
import { readFile } from './file-utils.js';
import ShpReader from './shp-reader.js';

export function bindHandlers() {
    addButton.addEventListener('change', async ({ target }) => {
        const { files } = target;

        if (files.length < 1) {
            return;
        }

        const arrayBuffer = await readFile(files[0]);
        const reader = new ShpReader(arrayBuffer);

        for (const feature of reader.featureIterator()) {
            console.log(feature);
        }
    });
}
