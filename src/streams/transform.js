import { Transform, pipeline } from 'stream';

const transform = async () => {
    const readable = process.stdin;
    const writable = process.stdout;

    const reverseTransform = new Transform({
        transform(chunk, _, callback) {
            const transformedChunk = chunk.toString().trim().split('').reverse().join('');

            this.push(transformedChunk + '\n');

            callback();
        }
    });

    pipeline(readable, reverseTransform, writable, (error) => {
        console.log(`Error: ${error}`);
    })
};

await transform();