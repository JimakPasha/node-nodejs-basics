import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = `${__dirname}/files/fileToRead.txt`;

    const input = fs.createReadStream(filePath);

    input.on('data', (chunk) => {
        process.stdout.write(chunk + '\n');
    });

    input.on('error', (error) => {
        throw Error(error);
    });
};

await read();