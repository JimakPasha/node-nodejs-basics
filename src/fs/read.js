import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, constants, readFile } from 'node:fs';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const folderPath = join(__dirname, 'files/fileToRead.txt');

    access(folderPath, constants.F_OK, (err) => {
        if(err) {
            throw new Error('FS operation failed'); 
        } else {
            readFile(folderPath, ((error, content) => {
                if(err) {
                    throw error;
                }
                console.log(Buffer.from(content).toString());
            })
            ) 
        }
    })


};

await read();