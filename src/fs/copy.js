import { promises as fs } from 'fs'

const copy = async () => {
    const dirPath = new URL('files', import.meta.url)
    const copyDirPath = new URL('files_copy', import.meta.url)

    try {
        await fs.cp(dirPath, copyDirPath, { errorOnExist: true, force: false, recursive: true }).catch(() => { 
            throw new Error('FS operation failed') 
        })
    } catch (err) { 
        console.error(err)
    }
};

await copy();