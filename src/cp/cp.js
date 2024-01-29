import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const file = `${__dirname}/files/script.js`;

    const cp = fork(file, args);

    cp.on('message', (message) => {
      console.log(message);
    });

    cp.on('close', (code) => {
      console.log(code);
    });
};

spawnChildProcess(['smth1', 'smth2']);
