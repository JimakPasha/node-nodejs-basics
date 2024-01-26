import { promises as fs } from 'fs';

const rename = async () => {
    const filePath = new URL('files/wrongFilename.txt', import.meta.url);
    const newPath = new URL('files/properFilename.md', import.meta.url);

    try {
        await fs.rename(filePath, newPath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();