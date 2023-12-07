import { addButton } from './elements.js';
import { readFile } from './file-utils.js';

export function bindHandlers() {
    addButton.addEventListener('change', async ({ target }) => {
        const { files } = target;

        if (files.length < 1) {
            return;
        }

        const arrayBuffer = await readFile(files[0]);
        const view = new DataView(arrayBuffer);
        console.log(view.byteLength, view.getInt32(0));
    });
}
