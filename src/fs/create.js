import { promises as fs } from 'fs';

const create = async () => {
    const filePath = new URL('files/fresh.txt', import.meta.url);

    try {
        await fs.access(filePath);
        throw new Error('FS operation failed');
      } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.writeFile(filePath, 'I am fresh and young');
            console.log('File created successfully');
        } else {
            throw err;
        }
      }
};

await create();