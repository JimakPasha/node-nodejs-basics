import fs from 'fs';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const readablefilePath = `${__dirname}/files/fileToCompress.txt`;
    const archivefilePath = `${__dirname}/files/archive.gz`;

    const readStream = fs.createReadStream(readablefilePath);
    const writeStream = fs.createWriteStream(archivefilePath);

    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream);
    
    writeStream.on('error', (error) => {
        console.error(error);
    });
};

await compress();