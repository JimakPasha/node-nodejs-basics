import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { cpus } from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const numCPUs = cpus().length;

    const workerPath = resolve(__dirname, './worker.js');

    const workers = new Array(numCPUs).fill(10);

    const workerPromises = workers.map((value, i) => (
        new Promise((resolve) => {
           const worker = new Worker(workerPath, {
               workerData: value + i
           });

           worker.on('message', data => {
               resolve({ status: 'resolved', data });
               worker.terminate();
           });

           worker.on('error', () => {
               resolve({ status: 'error', data: null });
               worker.terminate();
           });
       })
    ));

    const result = await Promise.all(workerPromises);

    console.log(result);
};

await performCalculations();