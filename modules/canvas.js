import { canvas } from './elements.js';

export function render() {
    clear();
}

function clear() {
    const { clientWidth: width, clientHeight: height } = canvas;
    const context = canvas.getContext('2d');

    context.fillStyle = '#EAEAEA';
    context.fillRect(0, 0, width, height);
}
