export async function readFile(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.addEventListener('load', ({ currentTarget }) => {
            const { result } = currentTarget;
            resolve(result);
        });
        reader.addEventListener('error', reject);
        reader.addEventListener('abort', reject);

        reader.readAsArrayBuffer(blob);
    });
}
