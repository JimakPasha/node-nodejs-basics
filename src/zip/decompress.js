import fs from 'fs';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { pipeline } from 'stream';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const readFilePath  = `${__dirname}/files/archive.gz`;
    const writeFilePath  = `${__dirname}/files/fileToCompress.txt`;

    const readStream = fs.createReadStream(readFilePath);
    const writeStream = fs.createWriteStream(writeFilePath);
    const unzip = zlib.createUnzip();

    readStream.pipe(unzip).pipe(writeStream);	

    writeStream.on('error', (error) => {
        console.error(error);
    });

};

await decompress();