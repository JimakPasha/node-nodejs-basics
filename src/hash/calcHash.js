import fs from 'fs';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = `${__dirname}/files/fileToCalculateHashFor.txt`;
    
    const hash = crypto.createHash('sha256');
    
    const input = fs.createReadStream(filePath);

    input.on('data', (chunk) => {
        hash.update(chunk);
    });

    input.on('end', () => {
        const result = hash.digest('hex');
        console.log(result);
    });

    input.on('error', (error) => {
      throw Error(error);
    });
};

await calculateHash();