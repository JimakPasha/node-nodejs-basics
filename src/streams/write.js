import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = `${__dirname}/files/fileToWrite.txt`;

    const writeToStream = fs.createWriteStream(filePath);

    writeToStream.on('error', (error) => {
        throw Error(error);
    });

    process.stdin.pipe(writeToStream);
};

await write();